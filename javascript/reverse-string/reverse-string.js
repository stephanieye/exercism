var ReverseString = function(string) {
  if (!string) {
    return '';
  } else {
    return string.split('').reverse().join('');
  }
};

module.exports = ReverseString;
