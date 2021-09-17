// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// My solution
// I thought mine was short but compared to others it's actually long
// Didn't need split. We can treat a string like an array when grabbing at index.
// Also could have used parseInt which 

function getAge(inputString) {
    return +inputString.split('')[0]
}

// Best

function getAge(inputString) {
    return parseInt(inputString);
}