// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// My solution

function rot13(message) {
    const messArr = message.split('')
    const newMessage = messArr.map((letter, index) => {
        // letter code
        let l = message.charCodeAt(index)
        // if n-z 110-122 or N-Z 78-90 --> -13
        if ((l >= 110 && l <= 122) || (l >= 78 && l <= 90)) {
            return String.fromCharCode(l - 13)
        }
        // if a-m (97-109) or A-M (65-77) --> +13
        else if ((l >= 97 && l <= 109) || (l >= 65 && l <= 77)) {
            return String.fromCharCode(l + 13)
        } else { // not a letter
            return letter
        }
    }).join('')
    return newMessage
}

// Best
// I prefer when solutions are a little more mathematical but not against keeping it simple. 

function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}