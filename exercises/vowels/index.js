// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my first brute-force approach
// function vowels(str) {
//   const matches = ['a', 'e', 'i', 'o', 'u'];
//   return str
//     .toLowerCase()
//     .split('')
//     .reduce((acc, cur) => {
//       if (matches.includes(cur)) {
//         acc += 1;
//       }
//       return acc;
//     }, 0);
// }

// his first solution
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   for (const char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// second regex solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
