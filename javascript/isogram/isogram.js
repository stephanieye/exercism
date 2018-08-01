var Isogram = function(input){
  this.value = input;
};

Isogram.prototype.isIsogram = function() {
  var array = this.value.toLowerCase().split('');

  for (var h = 0; h < array.length; h++) {
    if (array[h].match(/[-\s]/g)) {
      array.splice(h, 1);
    }
  }

  array = array.sort();

  for (var i = 0; i < array.length-1; i++) {
    if (array[i] === array[i+1]) {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
