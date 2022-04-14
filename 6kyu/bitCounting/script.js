// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// My solution

var countBits = function (n) {
    return n.toString(2).split('') // turn number into base 2 number then split it into an array in order to sum
        .map(e => Number(e)) // turn each digit in array from string to number
        .reduce((a, b) => a + b) // sum using reduce
};

// Best
// Genius. I kinda forgot split can be used with any character and didn't even consider this. 
// It would remove the zeros, only leaving the 1s which would mean length would be the same as the sum

countBits = n => n.toString(2).split('0').join('').length;