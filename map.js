const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let results = [];
  for (let elm of array) {
    results.push(callback(elm));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = map;