const add = function(num1 = 0,num2 = 0) {
	return num1 + num2
};

const subtract = function(num1 = 0,num2 = 0) {
	return num1 - num2
};

const sum = function(array) {
  let result = 0
	for (i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result
};

const multiply = function(array) {
  let result = 1
	for (i = 0; i < array.length; i++) {
    result *= array[i]
  }
  return result
};

const power = function(num1 = 0,num2 = 0) {
  return num1 ** num2

};

const factorial = function(num = 0) {
	if (num === 0 || num === 1){
    return 1
  } else {
    return num * factorial(num-1)
  }
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
