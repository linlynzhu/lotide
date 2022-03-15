const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌${actual} !== ${expected}`);
  }
};

const findKey = function(obj, determineFunc) {
  for (let elm in obj) {
    if (determineFunc(obj[elm])) {
      return elm;
    }
  }
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5);// => "noma"

const test2 = findKey({
  'a' : {s : 'str'},
  'b' : {st: true},
  'c' : {star: 0}
}, x => x.star === 0);
assertEqual(test1, undefined);
assertEqual(test2, 'c');

module.exports = findKey;