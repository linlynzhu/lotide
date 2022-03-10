const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌${actual} !== ${expected}`);
  }
};

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
    console.log(ans);
    return ans;
  } else {
    console.log(ans);
    return ans;
  }
};


eqArrays([1, 2, 3], [1, 2, 3]);// => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]);// => true
eqArrays(["1", "2", "3"], ["1", "2", 3]);// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);