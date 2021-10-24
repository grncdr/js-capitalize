
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
  var count = 0

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
    if (typeof opts.skipWord === 'function' && opts.skipWord(word, count)) {
      out += word
    } else {
      out += capitalize(word, opts)
    }
    out += sep
    startOfWord = nonWord.lastIndex
    count++
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
  if (opts.skipWord instanceof RegExp) {
    const rgx = opts.skipWord
    opts.skipWord = function (word, position) {
      return position > 0 && rgx.test(word)
    }
  }
  return opts || {}
}

module.exports = capitalize
