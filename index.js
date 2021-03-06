'use strict'

module.exports = function xkcd37 (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  return str.replace(/(\w+?)(?!\\)+(-ass)(\s+)(\S+?)/g, '$1$3ass-$4').replace(/\\-/g, '-')
}
