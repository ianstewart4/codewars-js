// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution

function solution(string) {
    let stringArr = string.split('')
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === stringArr[i].toUpperCase()) {
            stringArr.splice(i, 0, ' ')
            i++ // or it gets stuck adding infinite spaces
        }
    }
    return stringArr.join('')
}

// Best (non-regex)
// Surprised I didn't think of this way. 

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}