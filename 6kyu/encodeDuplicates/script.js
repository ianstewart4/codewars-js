// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My solution
// I created an object in order to track the count of each letter from the word, then iterate through the array, referencing the counts object and replacing the letter with '(' or ')' accordingly.

function duplicateEncode(word) {
    let counts = {}
    let textArr = word.toLowerCase().split('')

    // Iterating through the text array, if the counts object does not already have the property (letter), add it with count = 1, if it already has the property, add 1
    for (let i = 0; i < textArr.length; i++) {
        if (!counts.hasOwnProperty(textArr[i])) {
            counts[textArr[i]] = 1
        } else {
            counts[textArr[i]] += 1
        }
    }
    return textArr.map(el => counts[el] > 1 ? ')' : '(').join('')
}

// Best
// I really like this one and learned something from it. I'd never seen lastIndexOf before. 

function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}