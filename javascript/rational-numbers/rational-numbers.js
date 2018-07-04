var Rational = function(a, b) {
  if (b !== 0) {
    this.a = a;
    this.b = b;
  }
};

Rational.prototype.add = function(newRational){
  var newA = this.a * newRational.b + newRational.a * this.b;
  var newB = this.b * newRational.b;
  return new Rational(newA, newB);
};

module.exports = Rational;
