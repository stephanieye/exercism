var toRoman = function(input){
  var inputarray = input.toString().split('');
  var result = '';

  var convertThousands = function(thousands){
    result += 'M'.repeat(thousands);
  };

  var convertHundreds = function(hundreds){
    if (hundreds === 9) {
      result += 'CM';
      hundreds -= 9;
    }
    if (hundreds >= 5) {
      result += 'D';
      hundreds -= 5;
    }
    if (0 < hundreds < 5) {
      if (hundreds === 4) {
        result += 'CD';
      } else {
        result += 'C'.repeat(hundreds);
      }
    }
  };

  var convertTens = function(tens){
    if (tens === 9) {
      result += 'XC';
      tens -= 9;
    }
    if (tens >= 5) {
      result += 'L';
      tens -= 5;
    }
    if (0 < tens < 5) {
      if (tens === 4) {
        result += 'XL';
      } else {
        result += 'X'.repeat(tens);
      }
    }
  };

  var convertOnes = function(ones){
    if (ones === 9) {
      result += 'IX';
      ones -= 9;
    }
    if (ones >= 5) {
      result += 'V';
      ones -= 5;
    }
    if (0 < ones < 5) {
      if (ones === 4) {
        result += 'IV';
      } else {
        result += 'I'.repeat(ones);
      }
    }
  };


  var ones = Number(inputarray[inputarray.length-1]);
  var tens = Number(inputarray[inputarray.length-2]);
  var hundreds = Number(inputarray[inputarray.length-3]);
  var thousands = Number(inputarray[inputarray.length-4]);
  convertThousands(thousands);
  convertHundreds(hundreds);
  convertTens(tens);
  convertOnes(ones);

  return result;
};

module.exports = toRoman;
