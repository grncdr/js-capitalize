
function capitalize (string, opts) {
  opts = normalizeOptions(opts)
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

capitalize.words = function (string, opts = {}) {
  opts = normalizeOptions(opts)
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  return string.replace(/(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g, function (m) {
    return m.toUpperCase()
  })
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
