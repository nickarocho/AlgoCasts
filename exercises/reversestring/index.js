// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 1 - probably the best all around
// function reverse(str) {
//   return str.split('').reverse().join();
// }

// solution 2 - without the .reverse() cheater
function reverse(str) {
  let reversed = '';
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// solution 3 - hot shot 1-liner
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '');
// }

module.exports = reverse;
