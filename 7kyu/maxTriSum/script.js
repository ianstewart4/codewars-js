// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// My solution

function maxTriSum(numbers) {
    return [...new Set(numbers)].sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b, 0)
}