// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// My solution
// A little bit brute force but trying to avoid using regex

function remove(string) {
    let str = string.split('')
    for (let i = str.length - 1; i > 0; i--) {
        if (string[i] === '!') {
            str.pop()
        } else {
            return str.join('')
        }
    }
}