
function capitalize (string, opts) {
  opts = normalizeOptions(opts)
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

capitalize.words = function (string, opts) {
  opts = normalizeOptions(opts)
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  var start = 0
  var nonWord = /[^0-9a-zA-Z\u00C0-\u017F\u0400-\u04FF']+|$/g
  var match
  var out = ""

  while (match = nonWord.exec(string)) {
    var suffix = match[0]
    var word = string.substring(start, nonWord.lastIndex - suffix.length)
    out += capitalize(word, opts) + suffix
    start = nonWord.lastIndex
    if (start == string.length) break
  }

  return out
}

function normalizeOptions(opts) {
  if (!opts) {
    return { preserve: false }
  }
  if (typeof opts === 'boolean') {
    return { preserve: opts }
  }
  return opts || {}
}

module.exports = capitalize
