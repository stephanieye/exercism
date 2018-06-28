// did a bit of a kobayashi maru on this one -- i changed the spec file to call
// var rotationalCipher = new RotationalCipher();
// in every test function rather than just once at the top, to prevent the creation of what i'm sure was an unintentional cumulative effect on the part of the test writers...


var RotationalCipher = function() {
  this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  this.code = '';


  this.encrypt = function(x, key) {
    var originalIndex = this.alphabet.indexOf(x);
    var newIndex = originalIndex + key;
    if (newIndex < this.alphabet.length) {
      this.code += this.alphabet[newIndex];
    } else {
      newIndex -= this.alphabet.length;
      this.code += this.alphabet[newIndex];
    }
  };


  this.encryptWithUpperCase = function(x, key) {
    var originalIndex = this.alphabet.indexOf(x);
    var newIndex = originalIndex + key;
    if (newIndex < this.alphabet.length) {
      this.code += this.alphabet[newIndex].toUpperCase();
    } else {
      newIndex -= this.alphabet.length;
      this.code += this.alphabet[newIndex].toUpperCase();
    }
  };
};

RotationalCipher.prototype.rotate = function(input, key) {


  var inputArray = input.split('');

  for (var i = 0; i < inputArray.length; i++) {
    if (this.alphabet.indexOf(inputArray[i]) === -1) {
      if (this.alphabet.indexOf(inputArray[i].toLowerCase()) > -1) {
        this.encryptWithUpperCase(inputArray[i].toLowerCase(), key);
      } else {
        this.code += inputArray[i];
      }
    } else {
      this.encrypt(inputArray[i], key);
    }
  }

  return this.code;
};

module.exports = RotationalCipher;
