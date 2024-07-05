//Solution 1
// function numInStr(arr) {
//   let result = [];
//   for (let str of arr) {
//     let hasNumber = false;
//     for (let char of str) {
//       if (!isNaN(parseInt(char))) {
//         hasNumber = true;
//         break;
//       }
//     }
//     if (hasNumber) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// solution 2
function numInStr(arr) {
  return arr.filter((str) => {
    for (let char of str) {
      if (!isNaN(parseInt(char))) {
        return true;
      }
    }
    return false;
  });
}

console.log(numInStr(["this is a test", "test1"]));
