// My solution:
// Had to google how to use charCodeAt to convert the letters to numbers.

function wordsToMarks(string) {
    return string.toLowerCase().split('').reduce((acc, b) => acc + b.charCodeAt(0) - 96, 0)
}

// Best solution
// Essentially the same as mine but using an anonymous function.
// I learned that spread can be used on a string to convert it to an array.
// Only issue I see is it doesn't account for upper case letters which will have a different numerical value

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)