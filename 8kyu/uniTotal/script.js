// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// My solution

function uniTotal(string) {
    let sum = 0
    const letters = string.split('')
    for (let i = 0; i < letters.length; i++) {
        sum += letters[i].charCodeAt()
    }
    return sum
}