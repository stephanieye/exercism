var Bob = function(input) {
  this.value = input;
};

Bob.prototype.hey = function(input) {
  var comment = input.trim();
  if (/[A-Z]/.test(comment) && !/[a-z]/.test(comment) && !comment.includes('?')) {
    return 'Whoa, chill out!';
  } else if (/[A-Z]/.test(comment) && !/[a-z]/.test(comment) && comment.includes('?')) {
    return "Calm down, I know what I'm doing!";
  } else if (comment === '' || comment.includes('\t')) {
    return 'Fine. Be that way!';
  } else if (comment.indexOf('?') === comment.length-1) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
