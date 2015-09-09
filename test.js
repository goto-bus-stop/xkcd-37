var xkcd37 = require('./')
var t = require('assert')

t.equal(xkcd37('Man, that\'s a sweet-ass car'), 'Man, that\'s a sweet ass-car')

t.throws(function () {
  xkcd37(1337)
})
