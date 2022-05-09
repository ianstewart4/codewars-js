// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

// My solution

decodeMorse = function (morseCode) {
    let words = morseCode.trim().split('   ')// since each letter is divided by a space, we need to divide by triple space to separate by word. 
    let sentence = [] // sentence to be returned
    for (let i = 0; i < words.length; i++) { // for each word in the array of words
        let letters = words[i].split(' ') // split the "word" into it's letters which are separated by a space
        let word = '' // creating an empty string to add each letter as it iterates through

        for (let j = 0; j < letters.length; j++) { // for each letter in the word, decode with the preloaded table and add to the word.
            word += MORSE_CODE[letters[j]]
        }
        sentence.push(word) // add word to sentence array
    }

    return sentence.join(' ') // join with spaces and return
}

// Best
// Really like how they broke it into functions instead of for loops here. Much more concise and clear. 

decodeMorse = function (morseCode) {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}