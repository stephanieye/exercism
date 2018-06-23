var Pangram = function(input) {
  this.value = input;
};

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

Pangram.prototype.isPangram = function() {
  var string = this.value.toLowerCase();
  for (var i=0; i<alphabet.length; i++) {
    if (!string.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
