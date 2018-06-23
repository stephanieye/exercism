var Binary = function(input){
  this.value = input;
};

var sum = function(a, b) {
  return a + b;
};

Binary.prototype.toDecimal = function(){
  if ( /\D/.test(this.value) || /[2-9]/.test(this.value)) {
    return 0;
  } else {
    var decimalarray = [];
    var binaryarray = this.value.split('').reverse();
    for (var i=0; i<binaryarray.length; i++){
      decimalarray.push(Number(binaryarray[i]) * Math.pow(2, i));
    }
    return decimalarray.reduce(sum);
  }
};

module.exports = Binary;
