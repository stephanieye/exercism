var Acronyms = function(){};

Acronyms.prototype.parse = function(string) {
  if (string.indexOf(':') > -1) {
    string = string.slice(0, string.indexOf(':'));
  }

  var array = string.replace(/([A-Z])/g, ' $1').replace(/(-)/g, '$1 ').trim().split(' ');
  var acronym = '';
  for (var i = 0; i < array.length; i++) {
    acronym += array[i].charAt(0);
  }

  return acronym.toUpperCase();
};

var acronyms = new Acronyms();

module.exports = acronyms;
