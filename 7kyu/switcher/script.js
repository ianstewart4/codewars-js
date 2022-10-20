// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// My solution

const specialChars = {
    27: '!',
    28: '?',
    29: ' ',
}

function switcher(x) {
    return x.map(x => x >= 0 && x <= 26 ? String.fromCharCode(123 - Number(x)) : specialChars[x]).join('')
}