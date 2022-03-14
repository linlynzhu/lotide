const assert = require('chai').assert;
const middle = require('../middle');


describe('#middle', () => {
  it('returns [4,5] for [1,2,3,4,5,6,7,8]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });
  it('returns [4] for [1,2,3,4,5,6,7]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });
  it('returns [] for [1,2]', () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
});