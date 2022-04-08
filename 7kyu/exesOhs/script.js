// Instructions
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution
// This one feels a little verbose but it works 

function XO(str) {
    let xCount = 0;
    let oCount = 0;
    let checkStr = str.toLowerCase().split('')
    for (let i = 0; i < checkStr.length; i++) {
        if (checkStr[i] === 'x') {
            xCount++
        } else if (checkStr[i] === 'o') {
            oCount++
        }
    }
    return xCount === oCount
}

// Best
// Uses regex which I'm trying not to use too much for learning purposes but I really like this one.

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }