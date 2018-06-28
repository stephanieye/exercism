var School = function() {
  this.db = {};
};

School.prototype.add = function(name, grade) {
  if (!Object.keys(this.db).includes(grade.toString())) {
    var key = grade;
    this.db[key] = [name];
  } else {
    this.db[grade].push(name);
  }
};

School.prototype.roster = function(){
  Object.values(this.db).forEach(x => x.sort());
  return this.db;
};

School.prototype.grade = function(grade){
  if (Object.keys(this.db).includes(grade.toString())) {
    var key = grade;
    return this.db[key].sort();
  } else {
    return [];
  }
};


module.exports = School;
