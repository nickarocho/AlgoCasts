// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution - O(n), linear - ok
// function fib(n) {
//   const fibs = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = fibs[i - 1];
//     const b = fibs[i - 2];
//     fibs.push(a + b);
//   }
//   return fibs[n];
// }

// recursive solution - O(2^n), exponential - BAD
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// utilizing memoization to improve runtime of recursive fib
// by caching the result of expensive fn calls
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  // calls the memoized version of this fn
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
