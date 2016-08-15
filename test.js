var xkcd37 = require('./')
var t = require('assert')

// Should move the hyphen over 1 word
t.equal(xkcd37('Man, that\'s a sweet-ass car'), 'Man, that\'s a sweet ass-car')
// Double Backslash should skip over it
t.equal(xkcd37('Man, that\'s a sweet\\-ass car'), 'Man, that\'s a sweet-ass car')
// Single Backslash won't escape and should return as if it were normal
t.equal(xkcd37('Man, that\'s a sweet\-ass car'), 'Man, that\'s a sweet ass-car')
// Combined use
t.equal(xkcd37('Man, that\'s a sweet-ass car, but I think you\'re just a rich\\-ass fuck.'), 'Man, that\'s a sweet ass-car, but I think you\'re just a rich-ass fuck.')

t.throws(function () {
  xkcd37(1337)
})
