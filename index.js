'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.browser = browser;

var _system_js_hot_reloadJs = require('./system_js_hot_reload.js');

function browser(window, bs) {
  (0, _system_js_hot_reloadJs.HotReload)();
}
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var browser = _fs2['default'].readFileSync(__dirname + '/../dist/browser.js', 'utf-8');

var plugin = function plugin(opts, bs) {
  /* noop */
  var logger = bs.getLogger('jspm-hot');
  var clients = bs.io.of(bs.options.getIn(['socket', 'namespace']));
  logger.info('starting!');

  bs.events.on('file:changed', function (event) {
    if (event.namespace !== 'hot-jspm') {
      return;
    }

    clients.emit('jspm:reload', { path: event.path, type: 'change' });
  });
};

var hooks = {
  'server:middleware': function serverMiddleware() {
    return function (req, res, next) {
      console.log('middleware', req.originalUrl);
      next();
    };
  },
  'client:js': ';function(window, bs){\n    var browser = ' + browser.toString() + ' browser(window, bs)\n  }(window,  window.___browserSync___);'
};

var name = 'hot-jspm';

exports.hooks = hooks;
exports.plugin = plugin;

module.exports['plugin:name'] = name;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotReload = HotReload;

function HotReload() {
  console.log("HOT RELOAD");
}
