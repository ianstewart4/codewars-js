// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// My solution

// Return the output array, and ignore all non-op characters
function parse(data) {
    const arr = []
    let num = 0
    const dataArr = data.split('')
    dataArr.forEach(l => {
        if (l === 'i') {
            num += 1
        } else if (l === 'd') {
            num -= 1
        } else if (l === 's') {
            num *= num
        } else if (l === 'o') {
            arr.push(num)
        }
    })
    return arr
}