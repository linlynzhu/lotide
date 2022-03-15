const eqArrays = function(array1, array2) {
  let ans = false;
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

const without = function(array1, array2) {
  let array = [...array1];
  for (let elm of array1) {
    for (let elm1 of array2) {
      if (elm === elm1 && array.indexOf(elm) !== -1) {
        array.splice(array.indexOf(elm),1);
      }
    }
  }
  console.log(array);
  return array;
};


let words = ["hello", "world", "lighthouse"];
without(words, ["hello",'world','haha',2,4,'world']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;