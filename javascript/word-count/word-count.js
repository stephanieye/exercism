var Words = function(){};

Words.prototype.count = function(string){

  string = string.replace(/\s\s+/g, ' ');
  var array = string.trim().toLowerCase().split(/[,\s\n\t]/g);

  for (var g=0; g<array.length; g++) {
    for (var h=array[g].length-1; h>-1; h--) {
      if (array[g][h].match(/[^'a-z0-9\u00C0-\u017Fпривет]/g)) {
        array[g] = array[g].slice(0,h) + array[g].slice(h+1, array[g].length);
      }
      if (array[g] === '') {
        array.splice(g, 1);
      }
    }
  }

  var object = {};
  for (var i=0; i < array.length; i++) {
    if (array[i].charAt(0) === '\'') {
      array[i] = array[i].slice(1,array[i].length-1);
    }

    if (object.hasOwnProperty(array[i])) {
      object[array[i]] += 1;
    } else {
      object[array[i]] = 1;
    }
  }
  return object;
};

module.exports = Words;
