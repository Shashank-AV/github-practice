let size = 8;
let nextLetter = " ";
let string = "";

for (let n = 1; n <= size * size; n++) {
  string += nextLetter;
  if (n % size == 0) {
    string += "\n";
    if (size % 2 == 1) {
      nextLetter = nextLetter == " " ? "#" : " ";
    }
  } else {
    nextLetter = nextLetter == " " ? "#" : " ";
  }
}

console.log(string);
