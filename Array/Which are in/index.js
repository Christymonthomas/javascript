function inArray(array1, array2) {
  //...
  let result = [];
  for (let str1 of array1) {
    for (let str2 of array2) {
      if (str2.includes(str1)) {
        result.push(str1);
        break;
      }
    }
  }
  result.sort();
  return result;
}

console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
