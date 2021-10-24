
function capitalize (string, opts) {
  opts = normalizeOptions(opts)
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

// a QUOTE character immediately followed by a word character
var QUOTE = /['"`’]/
var WORD = /[0-9a-zA-Z\u00C0-\u017F\u0400-\u04FF]/

capitalize.words = function (string, opts) {
  opts = normalizeOptions(opts)
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  var startOfWord = 0
  var nonWord = /[^0-9a-zA-Z\u00C0-\u017F\u0400-\u04FF]+|$/g
  var match
  var out = ""

  while (match = nonWord.exec(string)) {
    var sep = match[0]
    var sepStart = nonWord.lastIndex - sep.length
    if (QUOTE.test(string[sepStart]) && WORD.test(string[sepStart + 1])) {
      // don't capitalize after an embedded quote
      continue
    }
    var word = string.substring(startOfWord, nonWord.lastIndex - sep.length)
    if (QUOTE.test(word[0])) {
      // strip leading quote
      out += word[0]
      word = word.substring(1)
    }
    out += capitalize(word, opts) + sep
    startOfWord = nonWord.lastIndex
    if (startOfWord == string.length) {
      break
    }
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
