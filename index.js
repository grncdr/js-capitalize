module.exports = function (string) {
  if (!string || (typeof string !== 'string') || string.trim() === '') {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.words = function (string) {
  if (!string || (typeof string !== 'string') || string.trim() === '') {
    return string;
  }
  return string.replace(/(^|\W)(\w)/g, function (m) {
    return m.toUpperCase();
  })
}
