// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my first solution
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let mostUsedChar = '';

  for (const char of str) {
    // cleaner way of checking/assigning: 👇
    charMap[char] = charMap[char] + 1 || 1;
    // check if current char is used more than current max char
    if (charMap[char] > max) {
      max = charMap[char];
      mostUsedChar = char;
    }
  }

  return mostUsedChar;
}

// his first solution
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (const char of str) {
//     if (charMap[char]) {
//       charMap[char] += 1;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   // seems to me that two loops is redundant... can do operation in above loop 🤷🏻‍♂️
//   for (const char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

module.exports = maxChar;
