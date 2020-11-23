// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// my first brute-force approach
function capitalize(str) {
  const strArr = str.split(' ');
  const capitalized = strArr.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
  return capitalized.join(' ');
}

// his first solution
// function capitalize(str) {
//   const words = [];
//   for (const word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

// third solution - not ideal but works
// function capitalize(str) {
//   // initialize an empty string, or even better - the first letter capitalized (since the algo below won't work for str[0])
//   let result = str[0].toUpperCase();
//   // loop through the chars in the arg string
//   for (let i = 1; i < str.length; i++) {
//     // IF the char to the left of a space, capitalize and add to result
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//       // ELSE add to result
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

module.exports = capitalize;
