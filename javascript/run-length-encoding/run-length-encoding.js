var RLE = function(input){
  this.value = input;
};

RLE.prototype.encode = function(input) {
  var array = input.split('');
  var arraycount = [0];
  var newarray = [];
  for (var i = array.length-1; i > -1; i--) {
    if (array[i] === array[i-1]) {
      array.splice(i, 1);
      arraycount[0] += 1;
    } else if (i-1 === -1) {
      arraycount[0] += 1;
    } else {
      arraycount[0] += 1;
      arraycount.unshift(0);
    }
  }
  for (var j = 0; j < array.length; j++) {
    newarray.push(arraycount[j]);
    newarray.push(array[j]);
  }
  for (var k = 0; k < newarray.length; k++) {
    if (newarray[k] === 0 || newarray[k] === 1) {
      newarray.splice(k, 1);
    }
  }
  var result = newarray.join('');
  return result;
};

RLE.prototype.decode = function(input) {
  var array = input.split('');
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(parseInt(array[i])) && Number.isInteger(parseInt(array[i+1]))) {
      array.splice(i, 2, array[i]+array[i+1]);
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (Number.isInteger(parseInt(array[j]))) {
      array.splice(j, 1, array[j+1].repeat(array[j]-1));
    }
  }
  var result = array.join('');
  return result;
};

var rle = new RLE();

module.exports = rle;
