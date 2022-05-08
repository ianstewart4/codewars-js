// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution
// This was slightly challenging just because of the null. Rereading instructions is always a good idea when stuck... 
// Could have used a for loop but trying to practice using forEach 

function countPositivesSumNegatives(input) {
    // In case null is passed
    if (input === null) {
        return []
    }
    // otherwise... create a count and sum variable 
    let count = 0
    let sum = 0

    // if greater than 0, add to count
    input.forEach(el => {
        if (el > 0) {
            count++
        }

        // if less than 0, add value to sum
        if (el < 0) {
            sum += el
        }
    })

    // If both variables remain 0, return empty array
    if (count === 0 && sum === 0) {
        return []
    }
    return [count, sum]
}

// Best
// Very similar to mine, but much much cleaner, and for loop does seem a bit more intuitive in this example.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];

    var positive = 0;
    var negative = 0;

    for (var i = 0, l = input.length; i < l; ++i) {
        if (input[i] > 0)
            ++positive;
        else
            negative += input[i];
    }

    return [positive, negative];
}