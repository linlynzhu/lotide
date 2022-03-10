const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (let elm in obj) {
    if (obj[elm] === val) {
      return elm;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  sci: "The Expanse"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');