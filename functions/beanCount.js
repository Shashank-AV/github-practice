function countChar(string, char) {
  let count = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] == char) {
      count++;
    }
  }
  return count;
}

const countBs = (string) => countChar(string, "R");
console.log(countBs("Robosoft"));
