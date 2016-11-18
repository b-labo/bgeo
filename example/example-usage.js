'use strict'

const { current } = require('bgeo')
const co = require('co')

co(function * () {
  let position = yield current()
  if (position) {
    let { coords } = position
    console.log('coords:', coords)
  }
}).catch((err) => console.error(err))
