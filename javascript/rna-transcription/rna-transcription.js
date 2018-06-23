var DnaTranscriber = function(input){
  this.value = input;
};

DnaTranscriber.prototype.toRna = function(input) {
  var array = input.split('');
  var answer = [];
  array.forEach(el => {
    switch (el) {
      case 'C':
        answer.push('G');
        break;
      case 'G':
        answer.push('C');
        break;
      case 'A':
        answer.push('U');
        break;
      case 'T':
        answer.push('A');
        break;
      default:
        answer.push('X');
    }
  });
  if (answer.includes('X')) {
    throw Error('Invalid input');
  } else {
    return answer.join('');
  }
};

module.exports = DnaTranscriber;
