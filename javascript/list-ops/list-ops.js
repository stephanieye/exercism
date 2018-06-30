var List = function(input){
  this.values = input || [];
};


// must return a new List so has .values property


List.prototype.append = function(newList) {
  var append = this.values;
  for (var i = 0; i < newList.values.length; i++) {
    append.push(newList.values[i]);
  }
  return new List(append);
};

List.prototype.concat = function(newList) {
  var concat = this.values;
  for (var i = 0; i < newList.values.length; i++) {
    concat.push(newList.values[i]);
  }
  concat.sort((a,b) => a - b);
  return new List(concat);
};



module.exports = List;
