function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  const isObject = (object) => typeof object == "object" && object != null;

  if (isObject(obj1) && isObject(obj2)) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }
    for (let property of Object.keys(obj1)) {
      if (!obj2.hasOwnProperty(property)) {
        return false;
      }
      if (isObject(obj1[property]) && isObject(obj2[property])) {
        if (!deepEqual(obj1[property], obj2[property])) {
          return false;
        }
      } else {
        if (obj1[property] !== obj2[property]) {
          return false;
        }
      }
    }

    return true;
  } else {
    return obj1 === obj2;
  }
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
console.log(deepEqual(1, "1"));
console.log(deepEqual(1, [1]));
console.log(deepEqual(12, 12.1));
//   console.log(deepEqual(null, undefined));
//   console.log(deepEqual('null', null));
//   console.log(deepEqual(undefined, undefined));
//   console.log(deepEqual(null, null));
//   console.log(deepEqual([1, 1, 1], [1, 1, 2]));
//   console.log(deepEqual([1, 2, 3], [1, 2, 3]));
//   console.log(deepEqual([1, 2, [1, {obj: 'abc'}]], [1, 2, [1, {obj: 'abc'}]]));
//   console.log(deepEqual([1, 2, [1, {obj: 'abc'}]], [1, 2, [1, {obj: 'abc', obj2: 'def'}]]));
