
var Matrix = function(input) {
  var rows = [];
  var columns = [];
  var columns1 = [];
  var columns2 = [];
  var columns3 = [];
  var toNumber = function(x) {
    return Number(x);
  };

  this.value = input.split('\n').forEach(function(string) {
    var across = string.split(' ').map(toNumber);
    rows.push(across);

    var down = across[0];
    columns1.push(down);
    columns.push(columns1);

    var down1 = across[1];
    columns2.push(down1);
    columns.push(columns2);

    var down2 = across[2];
    columns3.push(down2);
    columns.push(columns3);
  });

  this.rows = rows;
  this.columns = columns;
};

module.exports = Matrix;
