var rotationalCipher = function() {
  this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
};

rotationalCipher.prototype.rotate = function(input, key) {
  var code = '';

  var inputArray = input.split('');

for (var i = 0; i < inputArray.length; i++) {
if (this.alphabet.indexOf(inputArray[i]) === -1) {
    code += inputArray[i];
} else {
  var originalIndex = this.alphabet.indexOf(inputArray[i]);
  var newIndex = originalIndex + key;
  if (newIndex < this.alphabet.length) {
    code += this.alphabet[newIndex];
  } else {
    newIndex -= this.alphabet.length;
    code += this.alphabet[newIndex];
  }
}




}





  return code;
};

module.exports = rotationalCipher;
