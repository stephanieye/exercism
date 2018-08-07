var Hamming = function(){};

Hamming.prototype.compute = function(str1, str2) {

  var string1 = str1.split('');
  var string2 = str2.split('');

  if (string1.length !== string2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var ham = 0;
  for (var i = 0; i < string1.length; i ++) {
    if (string1[i] !== string2[i]) {
      ham += 1;
    }
  }

  return ham;

};

module.exports = Hamming;
