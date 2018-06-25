var PrimeFactors = function(input) {
  this.value = input;
};

PrimeFactors.prototype.for = function(number) {
  var array = [];
  for (var x=2; x<number+1; x++){
    while (number % x === 0) {
      array.push(x);
      number /= x;
    }
  }
  return array;
};


var primeFactors = new PrimeFactors();

module.exports = primeFactors;
