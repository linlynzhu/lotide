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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i <= sentence.length - 1; i ++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("000.!")['.'], [3]);
assertArraysEqual(letterPositions("    ")[' '], [0,1,2,3]);
// assertArraysEqual(letterPositions(""), {});
// console.log({} === {});