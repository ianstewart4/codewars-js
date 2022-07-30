// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.

// My solution
// Check if string ends with '!'. If yes, remove it.

function remove(string) {
    return string[string.length - 1] == '!' ? string.slice(0, string.length - 1) : string
}

// Favourite
// Forgot about the endsWith method. Will try to use this. Also wasn't aware slice accepted -1 to select the end. I thought this was just a Python thing. Noted!

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}