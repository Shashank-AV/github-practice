const min = function (x, y) {
  return x < y ? x : y;
};

// function declarations
function min(x, y) {
  return x < y ? x : y;
}

// arrow functions
const min = (x, y) => (x < y ? x : y);

// Test func
console.log(min(0, 10));

console.log(min(0, -10));
