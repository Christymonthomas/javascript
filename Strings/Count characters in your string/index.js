function count(string) {
  let charMap = {};
  for (char of string) {
    charMap[char] = ++charMap[char] || 1;
  }
  return charMap;
}

console.log(count("aba"));
