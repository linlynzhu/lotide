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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('🎉 the two arrays are the same');
  } else {
    console.log('⛈ why you need to know they are the same, they are not');
  }
};

const middle = function(array) {
  let index = Math.floor(array.length / 2);
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      result.push(array[index - 1],array[index]);
      console.log(result);
      return result;
    } else {
      result.push(array[index]);
      console.log(result);
      return result;
    }
  } else {
    console.log(result);
    return result;
  }
};

assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]),[]);
// console.log([] === []); // false
// console.log([].length); // 0