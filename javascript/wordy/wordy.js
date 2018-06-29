// not fully passing: error throws [object Object]

var ArgumentError = function(){};

var WordProblem = function(input){

  if (!/\d/.test(input)
   ||  (!input.includes('plus') && !input.includes('minus') && !input.includes('multiplied') && !input.includes('divided'))) {
    throw new ArgumentError();
  } else {
    this.raw = input.slice(8, input.length-1).split(' ');
    if (this.raw.length <5) {
      this.question = this.raw;
    } else {
      if (/\D/.test(this.raw[this.raw.length-3])) {
        this.extra = this.raw.slice(this.raw.length-3, this.raw.length);
      } else {
        this.extra = this.raw.slice(this.raw.length-2, this.raw.length);
      }
      this.question = this.raw.slice(0, this.raw.length-this.extra.length);
    }
  }
};

WordProblem.prototype.answer = function(){
  switch (this.question[1]) {
    case 'plus':
      this.result = Number(this.question[0]) + Number(this.question[this.question.length-1]);
      break;
    case 'minus':
      this.result = Number(this.question[0]) - Number(this.question[this.question.length-1]);
      break;
    case 'multiplied':
      this.result = Number(this.question[0]) * Number(this.question[this.question.length-1]);
      break;
    case 'divided':
      this.result = Number(this.question[0]) / Number(this.question[this.question.length-1]);
      break;
  }


  if (this.extra) {
    switch (this.extra[0]) {
      case 'plus':
        this.result += Number(this.extra[this.extra.length-1]);
        break;
      case 'minus':
        this.result -= Number(this.extra[this.extra.length-1]);
        break;
      case 'multiplied':
        this.result *= Number(this.extra[this.extra.length-1]);
        break;
      case 'divided':
        this.result /= Number(this.extra[this.extra.length-1]);
        break;
    }
  }

  return this.result;
};

module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
};
