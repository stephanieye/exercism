var Rational = function(a, b) {
  if (b !== 0) {
    this.a = a;
    this.b = b;
  }
};

Rational.prototype.distill = function(a,b){
  while (a % 2 === 0 && b % 2 === 0) {
    a /= 2;
    b /= 2;
  }
  if (b < 0) {
    b *= -1;
    a *= -1;
  }
  return new Rational(a, b);
};

Rational.prototype.add = function(newRational){
  var newA = this.a * newRational.b + newRational.a * this.b;
  var newB = this.b * newRational.b;
  return this.distill(newA, newB);
};

Rational.prototype.sub = function(newRational){
  var newA = this.a * newRational.b - newRational.a * this.b;
  var newB = this.b * newRational.b;
  return this.distill(newA, newB);
};

Rational.prototype.mul = function(newRational){
  var newA = this.a * newRational.a;
  var newB = this.b * newRational.b;
  return this.distill(newA, newB);
};

Rational.prototype.div = function(newRational){
  var newA = this.a * newRational.b;
  var newB = this.b * newRational.a;
  if (newB !== 0) {
    return this.distill(newA, newB);
  }
};

Rational.prototype.abs = function() {
  if (this.a < 0) {
    this.a *= -1;
  }
  if (this.b < 0) {
    this.b *= -1;
  }
  return this.distill(this.a, this.b);
};

Rational.prototype.exprational = function(c) {
  var newA = Math.pow(this.a, c);
  var newB = Math.pow(this.b, c);
  return this.distill(newA, newB);
};

Rational.prototype.expreal = function(c) {
  var answer = Math.pow(Math.pow(c, this.a), 1/this.b);
  if (answer.toString().match(/.9/)) {
    answer = Math.ceil(answer);
  }
  return answer;
};

Rational.prototype.reduce = function(){
  if (this.a === 0) {
    this.b = 1;
  }
  while (this.a % 2 === 0 && this.b % 2 === 0) {
    this.a /= 2;
    this.b /= 2;
  }
  if (this.a % this.b === 0) {
    this.a /= this.b;
    this.b /= this.b;
  }
  if (this.b % this.a === 0) {
    this.b /= this.a;
    this.a /= this.a;
  }
  if (this.b < 0) {
    this.b *= -1;
    this.a *= -1;
  }
  return new Rational(this.a, this.b);
};

module.exports = Rational;
