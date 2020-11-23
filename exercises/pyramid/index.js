// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   // from 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // create an empty string, 'level'
//     let level = '';
//     // to get columns in a pyramid of n rows, do 2 * n - 1
//     for (let col = 0; col < 2 * n - 1; col++) {
//       // to find the relation of what row n we are on and what indexes do we print '#' in,
//       // first fint the midpoint - Math.floor((2 * n - 1) / 2) - round down of cols / 2
//       // IF the colunn should have a '#', add import PropTypes from 'prop-types'
//       // - the row idx (row) tells us how many on either side of the mid point to add
//       // the following is a RANGE of indexes based on that calculation
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         // ELSE, add a ' '
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (row === n) return;

  // at the end (right) of the level
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
