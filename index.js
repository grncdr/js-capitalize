module.exports = function (string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.words = function (string) {
  return string.replace(/(^|\W)(\w)/g, function (m) {
    return m.toUpperCase()
  })
}
