/* Details

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
*/

// My Solution

function reverseWords(str) {
    let newStr = '' // creating string that will eventually be returned
    const splitWords = str.split(' ') // splitting up multiple words

    for (let word of splitWords) { // for each word in splitWords...
        let letters = word.split('') // splitting up the words into letters
        let newWord = letters.reverse().join('') // reversing then joining back together to a new word
        newStr = newStr + `${newWord} ` // appending to the new string
    }

    return newStr.slice(0, -1) // removing last space that was added
}

// Best Solution

function reverseWords(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}