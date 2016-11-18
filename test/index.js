/**
 * Get geo positions on browser
 * @module bgeo
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get currentTest () { return d(require('./current_test')) },
  get license () { return d(require('./license')) },
  get package () { return d(require('./package')) },
  get readme () { return d(require('./readme')) }
}
