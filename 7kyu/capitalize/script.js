// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// My solution
// Feels a bit verbose 

function capitalize(s) {
    return [s.split('').map((x, i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
    s.split('').map((x, i) => i % 2 == 0 ? x : x.toUpperCase()).join('')]
};

// Alternate solution

function capitalize(s) {
    let left = ''
    let right = ''
    s.split('').forEach((x, i) => {
        if (i % 2 == 0) {
            left += x.toUpperCase()
            right += x
        } else {
            left += x;
            right += x.toUpperCase()
        }
    })
    return [left, right]
};

// Best

function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};