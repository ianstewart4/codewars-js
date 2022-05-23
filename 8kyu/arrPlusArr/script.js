// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My/best solution

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}

// Alternate solution
// This one is interesting to me. 

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a, b) => a + b, 0)
}