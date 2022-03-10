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
    return ans;
  } else {
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

const takeUntil = function(array, determineFunc) {
  let results = [];
  for (let elm of array) {
    if (!determineFunc(elm)) {
      results.push(elm);
    } else {
      return results;
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);