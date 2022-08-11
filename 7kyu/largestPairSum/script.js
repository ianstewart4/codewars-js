// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// My solution

function largestPairSum(numbers) {
    return [...numbers.sort((a, b) => a - b)][numbers.length - 1] + [...numbers.sort((a, b) => a - b)][numbers.length - 2]
}

// Best
// Really just a dryer and cleaner version of mine by sorting ONCE in descending order THEN simply adding the 1st and 2nd elements.  

function largestPairSum(numbers) {
    numbers.sort(function (a, b) { return b - a });
    return numbers[0] + numbers[1];
}