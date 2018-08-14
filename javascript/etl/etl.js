var ETL = function () { };
ETL.prototype.transform = function (input) {
    var result = {};
    for (var i = 0; i < Object.keys(input).length; i++) {
        for (var j = 0; j < Object.values(input)[i].length; j++) {
            result[Object.values(input)[i][j].toString().toLowerCase()] = Number(Object.keys(input)[i]);
        }
    }
    return result;
};
module.exports = ETL;
