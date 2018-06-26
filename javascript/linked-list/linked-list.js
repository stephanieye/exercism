var LinkedList = function() {
  this.array = [];
};

LinkedList.prototype.push = function(input){
  this.array.push(input);
  return this.array;
};

LinkedList.prototype.unshift = function(input){
  this.array.unshift(input);
  return this.array;
};

LinkedList.prototype.pop = function(){
  return(this.array.pop());
};

LinkedList.prototype.shift = function(){
  return(this.array.shift());
};

LinkedList.prototype.count = function(){
  return(this.array.length);
};

LinkedList.prototype.delete = function(input){
  var index = this.array.indexOf(input);
  if (index > -1) {
    this.array.splice(index, 1);
    return this.array;
  }
};

module.exports = LinkedList;
