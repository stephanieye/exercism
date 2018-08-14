var Perfect = function () {
    var array = [];
    this.calculate = function (x) {
        for (var i = 1; i < x; i++) {
            if (x % i === 0) {
                array.push(i);
            }
        }
        var sum = array.reduce(function (a, b) {
            return a + b;
        }, 0);
        if (sum === x && x !== 1) {
            return 'perfect';
        }
        else if (sum > x) {
            return 'abundant';
        }
        else {
            return 'deficient';
        }
    };
};
Perfect.prototype.classify = function (number) {
    var answer;
    if (number <= 0) {
        answer = 'Classification is only possible for natural numbers.';
    }
    else {
        answer = this.calculate(number);
    }
    return answer;
};
module.exports = Perfect;
