// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My solution

function cleanString(s) {
    console.log(s)
    s = s.split('')
    let output = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            output.pop()
        } else {
            output.push(s[i])
        }
    }
    return output.join('')
}