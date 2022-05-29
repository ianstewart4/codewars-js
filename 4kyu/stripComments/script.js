
// Fork|Collect|
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// My solution

function solution(input, markers) {
    let inputArr = input.split('\n')
    let newInput = []

    for (let i = 0; i < inputArr.length; i++) {
        let clearedFor = true
        for (let mark of markers) {
            if (inputArr[i].includes(mark)) {
                clearedFor = false

                newInput.push(inputArr[i].slice(0, inputArr[i].indexOf(mark)).trim())
            }
        }
        if (clearedFor) {
            newInput.push(inputArr[i].trim())
        }
    }
    return newInput.join('\n')
}

// Best practice
// I had a feeling there would be a simple answer to this one. 
// Yet another time reduce had a little more power than I realized

function solution(input, markers) {
    return input.split('\n').map(
        line => markers.reduce(
            (line, marker) => line.split(marker)[0].trim(), line
        )
    ).join('\n')
}