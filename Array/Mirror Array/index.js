function mirror(arr) {
  return arr.concat(arr.slice(0, arr.length - 1).reverse());
}

console.log(mirror([3, 5, 6, 7, 8]));
