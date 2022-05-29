// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// My solution
// For sure could have done this much more efficiently. It seems people overwhelmingly used regex which I'm still avoiding to keep from using it as a crutch.

function toCamelCase(str) {
    if (str == '') return ''
    if (str.indexOf('-') != -1) {
        let words = str.split('-')
        let newArr = []
        for (let word of words) {
            if (word != words[0]) {
                let wordArr = word.split('')
                wordArr.splice(0, 1, wordArr[0].toUpperCase())
                newArr.push(wordArr.join(''))
            } else {
                newArr.push(word)
            }
        }
        return newArr.join('')
    }
    if (str.indexOf('_') != -1) {
        let words = str.split('_')
        let newArr = []
        for (let word of words) {
            if (word != words[0]) {
                let wordArr = word.split('')
                wordArr.splice(0, 1, wordArr[0].toUpperCase())
                newArr.push(wordArr.join(''))
            } else {
                newArr.push(word)
            }
        }
        return newArr.join('')
    }
}

// Best/most clever solution

function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}