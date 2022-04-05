// 6kyu
// Description:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// My Solution. I don't like using regex because it's kinda cheating and I still need to copy paste them.
// I assume ^ means not, A-Za-z is obviously upper and lowercase  


function alphabetPosition(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z]/g, '') // I used replaceAll but 'g' at the end of the regex works the same "global" instances 
        .split('')
        .map(letter => letter.charCodeAt() - 96)
        .join(' ')
}

// Best/Most Clever was basically the same as mine, always reassuring

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi) // the i is to make it case insensitive. Also uses match which eliminates the need to split or replace
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}