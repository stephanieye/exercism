var PhoneNumber = function(input){
  this.value = input;
};

PhoneNumber.prototype.number = function(){
  var str = this.value.replace(/\s+/g, '');
  var numarray = str.split('');

  for (var i=0; i < numarray.length; i++) {
    if (numarray[i].match(/[\D]/g)) {
      numarray.splice(i, 1);
    }
  }

  if (numarray.length === 11 && numarray[0] === '1') {
    numarray = numarray.splice(1, numarray.length);
    if (numarray.length === 10 && numarray[0] !== '1' && numarray[3] !== '0' || '1') {
      return numarray.join('');
    } else {
      return null;
    }
  } else if ((numarray.length === 10) && (numarray[0] !== '1') && (numarray[3] !== ('0' || '1'))) {
    return numarray.join('');
  } else {
    return null;
  }

};

module.exports = PhoneNumber;
