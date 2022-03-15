const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
  eqObjects,
  assertObjectsEqual
};