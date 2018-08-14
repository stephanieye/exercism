let Perfect = function(){

  let array = [];

  this.calculate = function(x) {
    for (let i=1; i<x; i++) {
      if (x % i === 0) {
        array.push(i);
      }
    }

    let sum = array.reduce((a, b) => {
      return a + b;
    }, 0);

    if (sum === x && x !== 1) {
      return 'perfect';
    } else if (sum > x) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }
};

Perfect.prototype.classify = function(number: number) {
  let answer;

  if (number <= 0) {
    answer = 'Classification is only possible for natural numbers.'
  } else {
    answer = this.calculate(number);
  }

  return answer;
}

module.exports = Perfect;
