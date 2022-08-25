// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My solution

function findLongest(array) {
    let longest = 0
    for (let i = 0; i < array.length; i++) {
        if (String(array[i]).length > String(longest).length) {
            longest = array[i]
        }
    }
    return longest
}

// Best
// Didn't think of using reduce in this way. Clever

const findLongest = l => l
    .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);