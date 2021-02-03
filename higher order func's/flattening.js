const flatten = (arrays) => {
  return arrays.reduce((flatArray, currentArray) => {
    return flatArray.concat(currentArray);
  }, []);
};

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
