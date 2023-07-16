const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
 return array.reduce((total, num) => total += num, 0);
};

const multiply = function(...args) {
  return args.reduce((product, num) => product *= num, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num < 0) {
    return "ERR";
  }
  if (num === 0) {
    return 1;
  }
  result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
