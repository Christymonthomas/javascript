// 1)Recursive soln.

// function getLength(arr) {
//   let count = 0;
//   function countItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         countItems(arr[i]);
//       } else {
//         count++;
//       }
//     }
//   }
//   countItems(arr);
//   return count;
// }

// Solution 2

function getLength(arr) {
  return arr.flat(Infinity).length;
}

console.log(getLength([1, [2], 1, [2], 1]));
