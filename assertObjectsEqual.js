const eqArrays = function(array1, array2) {
  let ans = false;
  if (array1.length === array2.length && array1.length === 0) {
    return true;
  }
  if (array2.length === array1.length) {
    for (let i = 0; i <= array1.length - 1; i ++) {
      if (array1[i] === array2[i]) {
        ans = true;
      } else {
        ans = false;
      }
    }
    return ans;
  } else {
    return ans;
  }
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1).sort();
  let keys2 = Object.keys(object2).sort();
  let ans;
  if (eqArrays(keys1, keys2)) {
    for (let elm of keys1) {
      if (Array.isArray(object1[elm]) && Array.isArray(object2[elm])) {
        if (eqArrays(object1[elm], object2[elm])) {
          ans = true;
        } else {
          return false;
        }
      } else if (object1[elm] === object2[elm]) {
        ans = true;
      } else {
        return false;
      }
    }
    return ans;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const dc1 = { c: ["2", 3], d: "1" };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, dc1);