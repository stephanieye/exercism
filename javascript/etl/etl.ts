let ETL = function(){};

ETL.prototype.transform = function(input: object) {


  let result = {};
  for (let i = 0; i < Object.keys(input).length; i++) {
    for (let j = 0; j < (<any>Object).values(input)[i].length; j++) {
    result[(<any>Object).values(input)[i][j].toString().toLowerCase()] = Number(Object.keys(input)[i]);
  }
  }

  return result;
}

module.exports = ETL;
