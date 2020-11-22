// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// solution 2
// function palindrome(str) {
//   if (!str) return false;
//   let strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (str[i] !== strArr[strArr.length - i - 1]) return false;
//     return true;
//   }
// }

// solution 3 - too much work, but it works
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
