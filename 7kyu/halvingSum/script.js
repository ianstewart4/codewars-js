// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// My solution

function halvingSum(n) {
    let denom = 1
    let sum = 1

    while (denom <= n / 2) {
        sum += Math.floor(n / denom)
        denom *= 2
    }
    return sum
}