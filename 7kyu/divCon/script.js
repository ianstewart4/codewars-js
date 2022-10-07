// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

// My solution
// Started off separating the strings and numbers but decided to refactor into one line

function divCon(x) {
    //   const strSum = x.filter(x => typeof x === 'string').reduce((a,b) => a + +b, 0)
    //   const intSum = x.filter(x => typeof x === 'number').reduce((a,b) => a + b, 0)
    //   return intSum - strSum

    return x.reduce((a, b) => typeof b === "string" ? a - +b : a + b, 0)
}