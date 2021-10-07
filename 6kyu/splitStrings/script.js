// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My solution

function solution(str) {
    let strArr = str.split('')
    let newArr = []

    for (let i = 0; i < strArr.length; i += 2) {
        if (i == strArr.length - 1) {
            newArr.push(strArr[i].concat('_'))
        } else {
            newArr.push(strArr[i].concat(strArr[i + 1]))
        }
    }
    return newArr
}

// Best
// I figured there'd be a one-liner regex solution. 

function solution(s) {
    return (s + "_").match(/.{2}/g) || []
}