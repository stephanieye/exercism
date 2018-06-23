//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
  this.value = year;
};

Year.prototype.isLeap = function() {
  if (this.value % 4 === 0 && (this.value % 100 !== 0 || this.value % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
