// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my first shot
// function chunk(array, size) {
//   // init a container array to hold the chunks
//   const chunks = [];
//   // loop through the array
//   for (let i = 0; i < array.length; i++) {
//     // splice sub arrays based on size param
//     // if any leftovers < size, add it as its own chunk
//     const chunk = array.length > size ? array.splice(0, size) : array;
//     // add the chunk to container
//     chunks.push(chunk);
//   }
//   // return the finished array
//   return chunks;
// }

// solution 1
// function chunk(array, size) {
//   const chunked = [];
//   for (const element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       // creates a sub-chunk and pushes curr elem in there
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// solution 2 - better, imo
function chunk(array, size) {
  const chunked = [];
  let idx = 0;
  while (array.length) {
    chunked.push(array.slice(idx, idx + size));
    idx += size;
  }
  return chunked;
}

module.exports = chunk;
