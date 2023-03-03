// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// My solution
// I really just wanted to use a hash map type approach for this even if it wasn't optimal. 
// I believe this would be reasonable efficient given that it only checks each value of i once. 


const nMap = {
    0: 2,
    1: 1
}
let i = 0

function isPowerOfTwo(n) {
    if (Object.values(nMap).indexOf(n) > -1) return true
    while (2 ** i <= n) {
        nMap[i] = 2 ** i
        if (nMap[i] === n) return true
        i++
    }
    return false
}

// Better mathy answer

function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));

}