import fs from 'fs'

const browser = fs.readFileSync(__dirname + '/../dist/browser.js', 'utf-8')

const plugin = function plugin (opts, bs) {
  /* noop */
  var logger = bs.getLogger('jspm-hot')
  var clients = bs.io.of(bs.options.getIn(['socket', 'namespace']))
  logger.info('starting!')

  bs.events.on('file:changed', function (event) {
    if (event.namespace !== 'hot-jspm') { return }

    clients.emit('jspm:reload', { path: event.path, type: 'change' })
  })
}

const hooks = {
  'server:middleware': function () {
    return function (req, res, next) {
      console.log('middleware', req.originalUrl);
      next()
    }
  },
  'client:js': `;function(window, bs){
    var browser = ${browser.toString()} browser(window, bs)
  }(window,  window.___browserSync___);`
}

const name = 'hot-jspm'

export { hooks as hooks, plugin as plugin }

module.exports['plugin:name'] = name
