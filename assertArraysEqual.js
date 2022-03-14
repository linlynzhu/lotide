const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('🎉 the two arrays are the same');
  } else {
    console.log('⛈ why you need to know they are the same, they are not');
  }
};

module.exports = assertArraysEqual;
