

// My solution
// 
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