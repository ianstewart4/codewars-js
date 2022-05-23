// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My solution

function stray(numbers) {
    // sort the array. if 0 and 1 are same, return last, else return first
    let sortedNums = numbers.sort((a, b) => a - b)
    return sortedNums[0] === sortedNums[1] ? sortedNums[sortedNums.length - 1] : sortedNums[0]
}

// Best
// Basically, if the number at the index is the same as the last index of that number, then it is the stray number.

function stray(numbers) {
    for (var i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
    }
}