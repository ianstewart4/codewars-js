// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// My solution. 
// I think this likely could have been done with far fewer lines, but I think this makes it easy to understand. 

function duplicateCount(text) {
    let counts = {}
    let textArr = text.toLowerCase().split('')
    let multiples = 0

    // Iterating through the text array, if the counts object does not already have the property (letter), add it with count = 1, if it already has the property, add 1
    for (let i = 0; i < textArr.length; i++) {
        if (!counts.hasOwnProperty(textArr[i])) {
            counts[textArr[i]] = 1
        } else {
            counts[textArr[i]] += 1
        }
    }

    // Check each property(letter) and adding 1 to multiples for each one with count of 2 or more. 
    for (const prop in counts) {
        if (counts[prop] > 1) {
            multiples += 1
        }
    }
    return multiples
}

// Best
// Of course, as always there is a one-liner
// I don't like this one. It doesn't reflect coding skills, just regex skills. Cool, but not fun IMO

function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}