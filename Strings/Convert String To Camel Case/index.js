function toCamelCase(str) {
  // split the string by space,hyphen or underscore.
  const words = str.split(/[\s-_]/);

  // Capitalize the first letter of each word except the first word
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words together and return

  return camelCaseWords.join("");
}

console.log(toCamelCase("The_Stealth_Warrior"));
