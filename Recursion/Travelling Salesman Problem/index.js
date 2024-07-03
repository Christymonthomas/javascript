function paths(n) {
  if (n === 0 || n === 1) return 1;

  return n * paths(n - 1);
}
