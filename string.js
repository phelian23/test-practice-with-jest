function stringLength(string) {
    if (string.length <1 || string.length > 10) {
        throw new Error('String length is not between 1 and 10');
    }
  return string.length;
}

module.exports = stringLength;