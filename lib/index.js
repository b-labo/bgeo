/**
 * Get geo positions on browser
 * @module bgeo
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get current () { return d(require('./current')) }
}
