// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// My solution

function diamond(n) {
    if (n === 0 || n % 2 === 0 || n < 1) {
        return null
    }
    if (n === 1) {
        return "*\n"
    }
    let starArr = []
    let stars
    let space
    let starCount = 1
    let spaceCount = (n - 1) / 2
    for (let i = 1; i < (n + 1) / 2; i++) {
        stars = '*'.repeat(starCount)
        space = ' '.repeat(spaceCount)
        starArr.push(`${space}${stars}\n`)
        spaceCount -= 1
        starCount += 2
    };
    for (let i = (n + 1) / 2; i <= n; i++) {
        stars = '*'.repeat(starCount)
        space = ' '.repeat(spaceCount)
        starArr.push(`${space}${stars}\n`)
        spaceCount += 1
        starCount -= 2
    };
    return starArr.join('')
}

// Best
// It did occur to me to use absolute value here but was easier to conceptualize the way I did it.

function diamond(n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) {
        let len = Math.abs((n - 2 * i - 1) / 2)
        str += ' '.repeat(len)
        str += '*'.repeat(n - 2 * len)
        str += '\n'
    }
    return str
}