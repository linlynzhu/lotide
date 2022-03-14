const middle = function(array) {
  let index = Math.floor(array.length / 2);
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      result.push(array[index - 1],array[index]);
      return result;
    } else {
      result.push(array[index]);
      return result;
    }
  } else {
    return result;
  }
};

module.exports = middle;