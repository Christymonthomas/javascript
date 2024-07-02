function arrayDiff(a, b) {
  return a.filter((value) => !b.includes(value));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
