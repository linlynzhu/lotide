# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @linlynzhu/lotide`

**Require it:**

`const _ = require('@linlynzhu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return the first element of an array
* `tail(...)`: return the tail elements (except 1st elm) as an array of an array
* `middle(...)`: return the middle elements of an array as an array
* `eqArrays(...)`: compare if two arrays are equal
* `assertArraysEqual(...)`: print out noticeable messages of the comparison of two arrays
* `assertEqual(...)`: compare if two input data are equal