function range(start, end, step = start <= end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    if (start > end) {
      return undefined;
    }

    for (let n = start; n <= end; n += step) {
      array.push(n);
    }
  } else if (step < 0) {
    if (start < end) {
      return undefined;
    }

    for (let n = start; n >= end; n += step) {
      array.push(n);
    }
  } else {
    return undefined;
  }

  return array;
}

function sum(array) {
  let result = 0;

  for (num of array) {
    result += num;
  }

  return result;
}

console.log(range(1, 10));
console.log(range(8, 5));
console.log(range(5, 2, -1));
console.log(range(10, 1, 1));
console.log(range(1, 10, -1));
console.log(range(1, 10, 0));
console.log(range(1, 1));
console.log(sum(range(1, 10)));
