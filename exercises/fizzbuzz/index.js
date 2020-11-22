// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// my first solution
function fizzBuzz(n) {
  for (let i = 1; i <= parseInt(n); i++) {
    let message = i;
    // multiple of both 3 and 5? - same as multiple of just 15
    if (message % 5 === 0 && message % 3 === 0) {
      message = 'fizzbuzz';
      // multiple of just 3?
    } else if (message % 3 === 0) {
      message = 'fizz';
      // multiple of just 5?
    } else if (message % 5 === 0) {
      message = 'buzz';
    }
    console.log(message);
  }
}

module.exports = fizzBuzz;
