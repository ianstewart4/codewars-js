// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// My solution
// Could have been a one-liner, but splitting it up for readability. Probably could have split it up more. 
// Should not have used map here. Sometimes forget reduce can do more than simply summing.

function narcissistic(value) {
    let valArr = String(value).split('')
    let newValArrSum = valArr.map(x => x ** (valArr.length)).reduce((a, b) => a + b)
    return newValArrSum === value
}

// Best/Most Clever Solution
// Really quite similar to mine but with different syntax. adding '' to the value to make it a string, using math.pow instead of **, and using reduce instead of map and reduce would be more efficient...

function narcissistic(value) {
    return ('' + value).split('').reduce(function (p, c) {
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}