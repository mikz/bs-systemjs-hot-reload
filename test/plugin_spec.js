import {hooks} from '../src/index.js'
import {assert} from 'chai'

describe('hooks', () => {
  it('has client script', () => {
    assert.property(hooks, 'client:js')
  })

  describe('client script', () => {
    let window = {}
    let bs = {}

    it('accepts window and browsersync', () => {

    })
  })
})
