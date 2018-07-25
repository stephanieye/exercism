var Squares = function(num){
  this.value = num;
  this.squareOfSums = this.squareOfSumsFunc();
  this.sumOfSquares = this.sumOfSquaresFunc();
  this.difference = this.squareOfSums - this.sumOfSquares;
};

Squares.prototype.squareOfSumsFunc = function(){
  var sum = 0;
  for (var i = 1; i < this.value+1; i++) {
    sum += i;
  }
  return sum * sum;
};

Squares.prototype.sumOfSquaresFunc = function(){
  var sum = 0;
  for (var i = 1; i < this.value+1; i++) {
    sum += (i*i);
  }
  return sum;
};

module.exports = Squares;
