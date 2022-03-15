const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  letters = letters.split(' ').join('');
  console.log(letters);
  let result = {};
  for (let elm of letters) {
    if (result[elm]) {
      result[elm] += 1;
    } else {
      result[elm] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1[" "], undefined);
assertEqual(result1["h"], 4);

module.exports = countLetters;