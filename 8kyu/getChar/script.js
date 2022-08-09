// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

// My solution

const getChar = (c) => String.fromCharCode(c)

// Best
// Didn't think about simply copying the method. Curious how this compares in terms of memory efficiency. 

const getChar = String.fromCharCode;
