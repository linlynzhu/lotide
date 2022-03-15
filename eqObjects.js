const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');


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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const dc1 = { c: ["2", 3], d: "1" };
eqObjects(cd, dc);
eqObjects(cd, dc1);

const cd2 = { c: [3,4], d: ["2", 3, 4] };
const cd3 = { c: [1,2], d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
eqObjects(cd3, cd2);

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, dc1), false);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd3, cd2), false);

module.exports = eqObjects;