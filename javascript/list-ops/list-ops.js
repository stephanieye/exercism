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

List.prototype.filter = function(func) {
  var values = this.values;
  for (var i = 0; i < values.length; i++) {
    if (!func(values[i])) {
      values.splice(i, 1);
    }
  }
  return new List(values);
};

List.prototype.length = function() {
  var length = 0;
  for (var i = 0; i < this.values.length; i ++) {
    length += 1;
  }
  return length;
};





module.exports = List;
