var Anagram = function(input){
  this.value = input;
};

Anagram.prototype.matches = function(...input){
  var array = [];
  if (input.length > 1) {
    for (var a = 0; a < input.length; a++) {
      array.push(input[a]);
    }
  } else if (typeof input[0] === 'string') {
    array.push(input[0]);
  } else {
    array = input[0];
  }
  var original = this.value.toLowerCase().split('').sort().join('');
  var sortedArray = array.map(x => x.toLowerCase().split('').sort().join(''));
  var resultArray = [];
  for (var i = 0; i < sortedArray.length; i++) {
    if ((sortedArray[i] === original) && (array[i].toLowerCase() !== this.value.toLowerCase())) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};

module.exports = Anagram;
