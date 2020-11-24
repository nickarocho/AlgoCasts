/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   // create empty array of arrays called 'results'
//   const spiral = [...Array(n)].map(() => Array(n).fill(''));
//   // create a counter variable, starting at 1
//   let counter = 1;
//   let row = 0;
//   let col = 0;
//   // as long as (start column <= end column) AND (start row <= end row)
//   // while (col <= n - 1 && row <= n - 1) {
//   // Loop from start column to end column
//   for (let i = 0; i < n; i++) {
//     console.log(spiral[i].length);

//     for (let j = 0; j < spiral[i].length; j++) {
//       // at results[start_row][i] assign counter variable
//       spiral[row][col] = counter;
//       // increment counter
//       counter++;
//       col += 1;
//       console.log({ col });
//     }
//   }
//   row += 1;
//   console.log({ row });
//   // }
//   console.log({ n, spiral });
//   return spiral;
//   // increment start row
//   // loop from start row to end row
//   // at results[i][end_column] assign counter variable
//   // increment counter
//   // decrement end col
//   // ... repeat for other two sides
// }

// function matrix(n) {
//   // initialize empty 2D array
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   // initialize counter - keeps track of which number to add at the current index
//   let counter = 1;
//   // keep track of the start row, start col, end row, end col. Will update dynamically
//   let [startCol, startRow] = [0, 0];
//   let [endCol, endRow] = [n - 1, n - 1];

//   // continue the loops til the grid is completed
//   while (startCol <= endCol && startRow <= endRow) {
//     // Top row looper
//     for (let i = startCol; i <= endCol; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     // Right column looper
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endCol] = counter;
//       counter++;
//     }
//     endCol--;

//     // Bottom row looper
//     for (let i = endCol; i >= startCol; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     // Start col looper
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startCol] = counter;
//       counter++;
//     }
//     startCol++;
//   }

//   return results;
// }

// rep 2 - no peeking
function matrix(n) {
  const spiral = [];
  for (let i = 0; i < n; i++) {
    spiral.push([]);
  }

  let [startRow, startCol] = [0, 0];
  let [endRow, endCol] = [n - 1, n - 1];
  let counter = 1;

  while (startRow <= endRow && startCol <= endCol) {
    console.log({ counter });

    // Top row
    for (let i = startRow; i <= endCol; i++) {
      spiral[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right col
    for (let i = startRow; i <= endRow; i++) {
      spiral[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      spiral[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left col
    for (let i = endRow; i >= startRow; i--) {
      spiral[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return spiral;
}

module.exports = matrix;
