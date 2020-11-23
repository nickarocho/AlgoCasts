// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// my first solution
function anagrams(stringA, stringB) {
  // 1. strip punctuation and spaces, lowercase the strings
  const [strippedA, strippedB] = [stripString(stringA).split(''), stripString(stringB).split('')];

  // 2. check for unequal string lengths - not an anagram if it has extra letters
  if (strippedA.length !== strippedB.length) return false;

  // 3. initialize the charmaps of strings of the same length
  const [charMapA, charMapB] = [createCharMap(strippedA), createCharMap(strippedB)];

  // 4. loop through one of the maps and compare each letter's (key) count (value) to the second map
  return compareMaps(charMapA, charMapB);

  function compareMaps(mapA, mapB) {
    for (const char in mapA) {
      if (mapA[char] !== mapB[char]) return false;
    }
    return true;
  }

  function createCharMap(charArr) {
    const charMap = {};
    for (const char of charArr) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }

  function stripString(s) {
    return s.replace(/[^\w]/g, '').toLowerCase();
  }
}

// his first solution
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// his second hot shot 🔥 solution (has issues with scalability)
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

module.exports = anagrams;
