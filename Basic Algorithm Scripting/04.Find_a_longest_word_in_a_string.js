function findLongestWordLength(str) {
  let array = str.split(" ");
  return Math.max(... array.map(el => el.length))
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");