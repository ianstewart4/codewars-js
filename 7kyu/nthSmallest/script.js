// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// My solution

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}
