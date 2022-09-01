// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// My solution

function array(arr) {
    // p-r: string-string
    // split string
    const strArr = arr.split(',')
    // if length < 3 return null
    return strArr.length < 3 ? null : strArr.slice(1, strArr.length - 1).join(' ')
}

// Best
// I often forget about instances like this where you can use the or in a return statement, although I think the ternary makes it more intuitive to understand what conditions we want to return null

function array(arr) {
    return arr.split(",").slice(1, -1).join(" ") || null;
}