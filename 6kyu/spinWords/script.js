// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// My solution
// I solved this one quite quickly, but I could have solved it more simply and cleanly I think. 

function spinWords(string) {
    let words = string.split(' ')
    let newStr = []
    for (let word of words) {
        if (word.length > 4) {
            newStr.push(
                word.split('').reverse().join('')
            )
        } else {
            newStr.push(word)
        }
    }
    return newStr.join(' ')
}

// Best
// I quite like this one. I think I just need to think to use array methods more. 

function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}