var Gigasecond = function(input) {
  this.value = input;
};

Gigasecond.prototype.date = function() {
  var millisecondsfrom1970tillstartdate = this.value.getTime();
  var gigasecondfromstartdatetoenddateandsince1970 = millisecondsfrom1970tillstartdate + 1000000000000;
  var enddate = new Date(gigasecondfromstartdatetoenddateandsince1970);
  return enddate;
};


module.exports = Gigasecond;
