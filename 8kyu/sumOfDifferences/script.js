// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// My solution

function sumOfDifferences(arr) {
    const arrDesc = arr.sort((a, b) => b - a)
    let sum = 0
    for (let i = 1; i < arrDesc.length; i++) {
        sum += (arrDesc[i - 1] - arrDesc[i])
    }
    return sum
}

// Best
// Had I looked at the test cases I might have come up with something like this.

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}