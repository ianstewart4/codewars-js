// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// My solution

function expandedForm(num) {
    let numArr = String(num).split('')
    let exArr = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] != 0) {
            let wholeNum = `${numArr[i]}${'0'.repeat(numArr.length - 1 - i)}`
            exArr.push(wholeNum)
        }
    }
    return exArr.join(' + ')
}

// Best

const expandedForm = n => n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");