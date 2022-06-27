// # Exercise 05 - sumAll

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```

// ## Hints

// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop

const sumAll = function (integerOne, integerTwo) {
  // Verify both inputs as postive value integers
  if (!Number.isInteger(integerOne) || !Number.isInteger(integerTwo))
    return "ERROR";
  if (integerOne < 0 || integerTwo < 0) return "ERROR"; // Checks both positive numbers
  let minInteger = Math.min(integerOne, integerTwo); // Find smallest integer
  let maxInteger = Math.max(integerOne, integerTwo); // Find largest integer
  let sumOfMinToMax = minInteger;
  for (let i = minInteger + 1; i <= maxInteger; i++) {
    sumOfMinToMax += i;
  }
  return sumOfMinToMax;
};

// Do not edit below this line
module.exports = sumAll;
