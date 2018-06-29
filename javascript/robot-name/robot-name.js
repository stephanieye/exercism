// optional spec not yet solved :(

var Robot = function(){
  this.alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  this.usedNames = {};
  this.name = '';
  this.makeName();
};

Robot.prototype.makeName = function(){
  if (this.name === '') {
    for (var i=0; i<2; i++) {
      this.name += (this.alphabet[Math.floor(Math.random()*this.alphabet.length)]);
    }
    for (var j=0; j<3; j++) {
      this.name += (Math.floor(Math.random()*10));
    }
    return this.checkName(this.name);
  }
};

Robot.prototype.checkName = function(name){
  if (!this.usedNames[name]) {
    this.usedNames[name] = true;
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
