// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my own first solution
function reverseInt(n) {
  const nString = n.toString();
  const flipped = parseInt(nString.split('').reverse().join(''));
  return n < 0 ? -flipped : flipped;
}

// his 1st (and only) solution
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   return parseInt(reversed) * Math.sign(n);
// }

// my 2nd solution - w/o .reverse()
// function reverseInt(n) {
//   let nString = n.toString();
//   let flipped = '';
//   for (const char in nString) {
//     flipped = nString[char] + flipped;
//   };
//   return parseInt(flipped) * Math.sign(n);
// }

module.exports = reverseInt;
