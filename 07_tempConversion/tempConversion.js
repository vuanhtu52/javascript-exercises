const convertToCelsius = function(fValue) {
  cValue = 5 / 9 * (fValue - 32);
  cValue = Math.round(cValue * 10) / 10
  return cValue;
};

const convertToFahrenheit = function(cValue) {
  fValue = (cValue * 9 / 5) + 32;
  fValue = Math.round(fValue * 10) / 10;
  return fValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
