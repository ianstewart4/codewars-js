// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My solution

function isIsogram(str) {
    let letterCheck = [] // create empty array to add each new letter
    let letters = str.toLowerCase().split('') // split string into letters to check/add to array
    for (let i = 0; i < letters.length; i++) {
        if (!letterCheck.includes(letters[i])) { // if letter is not in array, add to array
            letterCheck.push(letters[i])
        } else {
            return false // if letter is already in array, that means it is a repeat
        }
    }
    return true // if each character in the string is added to the array without repeats, then return true, it's an isogram!
}

// Best
// I've noticed 7s have some of the best one liners. Genius and still very clear and readable
// This one just uses set to get the unique letters of the string. 
// Compares length to original, since it will be shorter if there are repeats which would be removed. Love it

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}