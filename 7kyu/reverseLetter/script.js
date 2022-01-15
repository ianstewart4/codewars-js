// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// My solution

function reverseLetter(str) {
    const ALPHA_NUM = /[a-zA-Z]/
    let reverse = []
    let strArr = str.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (ALPHA_NUM.test(strArr[i])) {
            reverse.unshift(strArr[i])
        }
    }
    return reverse.join('')
}

// Best
// Similar. I wasn't certain if using multiple methods would be as efficient. 

reverseLetter = (s) => s.replace(/[^a-z]/gi, '').split('').reverse().join('');