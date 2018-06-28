var SecretHandshake = function(input){
  if (/\D/.test(input)) {
    throw new Error('Handshake must be a number');
  } else {
    var choices = [1, 2, 4, 8, 16];
    this.choice = [];
    for (var i=choices.length-1; i>-1; i--) {
      if (choices.includes(input)) {
        this.choice.unshift(input);
        input -= input;
      } else if (input - choices[i] > 0) {
        this.choice.unshift(choices[i]);
        input -= choices[i];
      }
    }
  }
};


SecretHandshake.prototype.commands = function() {
  var array = ['wink', 'double blink', 'close your eyes', 'jump'];
  var response = [];

  for (var i = 0; i<this.choice.length; i++) {
    if (this.choice[i] === 1) {
      response.push(array[0]);
    } else if (this.choice[i] === 2) {
      response.push(array[1]);
    } else if (this.choice[i] === 4) {
      response.push(array[2]);
    } else if (this.choice[i] === 8) {
      response.push(array[3]);
    } else if (this.choice[i] === 16) {
      response.reverse();
    }
  }
  return response;
};


module.exports = SecretHandshake;



//not needed but pleased i figured out how to convert to binary:
// var binary = [];
// while (input/2 > 0) {
//   input = Math.floor(input);
//   binary.unshift(input % 2);
//   input /= 2;
// }
// this.binary = Number(binary.slice(1, binary.length).join(''));
