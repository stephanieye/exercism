var Cipher = function(key) {

  if (key && (/\d/.test(key) || /[A-Z]/.test(key))) {
    throw Error('Bad key');
  } else if (key === '') {
    throw Error('Bad key');
  } else if (!key) {
    this.key = makeKey();
  } else {
    this.key = key;
  }
};

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

Cipher.prototype.encode = function(string) {
  var code = '';
  if (this.key.length < string.length) {
    var keyy = this.key.repeat(Math.ceil(string.length/this.key.length));
  } else {
    keyy = this.key;
  }
  var letterArray = string.split('');
  for (var i=0; i<string.length; i++) {
    var letter = letterArray[i];
    console.log(letter);
    var stringindex = alphabet.indexOf(letter);
    var keyindex = alphabet.indexOf(keyy[i]);
    var mix = stringindex+keyindex;
    if (mix >= alphabet.length) {
      var newindex = mix - alphabet.length;
    } else {
      newindex = mix;
    }
    letter = alphabet[newindex];
    code += letter;
  }
  return code;
};


Cipher.prototype.decode = function(code) {
  var string = '';
  if (this.key.length < code.length) {
    var keyy = this.key.repeat(Math.ceil(string.length/this.key.length));
  } else {
    keyy = this.key;
  }
  var letterArray = code.split('');
  for (var i=0; i<code.length; i++) {
    var letter = letterArray[i];
    console.log(letter);
    var codeindex = alphabet.indexOf(letter);
    var keyindex = alphabet.indexOf(keyy[i]);
    var mix = codeindex-keyindex;
    if (mix < 0) {
      var newindex = mix + alphabet.length;
    } else {
      newindex = mix;
    }
    letter = alphabet[newindex];
    string += letter;
  }
  return string;
};


var makeKey = function() {
  var key = '';
  for (var i=0; i<100; i++){
    var index = Math.floor(Math.random()*alphabet.length);
    var letter = alphabet[index];
    key += letter;
  }
  return key;
};

module.exports = Cipher;
