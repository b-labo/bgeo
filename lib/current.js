/**
 * Get current geo data
 * @function current
 * @returns {Promise}
 */

'use strict'

const { get }  = require('bwindow')

/** @lends current */
function current () {
  return new Promise((resolve, reject) => {
    let geolocation = get('navigator.geolocation')
    if (!geolocation) {
      return
    }
    geolocation.getCurrentPosition((position) =>
      resolve(position)
    )
  })
}

module.exports = current
