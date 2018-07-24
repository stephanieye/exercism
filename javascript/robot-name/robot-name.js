var alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var usedNames = {};

var Robot = function(){
  this.name = '';
  this.makeName();
};

Robot.prototype.makeName = function(){
  if (this.name === '') {
    for (var i=0; i<2; i++) {
      this.name += (alphabet[Math.floor(Math.random()*alphabet.length)]);
    }
    for (var j=0; j<3; j++) {
      this.name += (Math.floor(Math.random()*10));
    }
    return this.checkName(this.name);
  }
};

Robot.prototype.checkName = function(name){
  if (!usedNames[name]) {
    usedNames[name] = true;
    return name;
  } else {
    return this.reset();
  }
};

Robot.prototype.reset = function(){
  this.name = '';
  this.makeName();
};

module.exports = Robot;
