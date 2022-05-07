// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My solution
// Bordering on not being a clear one-liner IMO. 
// Getting length of "ending" to know how far from the end of the original to grab and using that to reference beginning of slice and the length of str to get the end for the slice method. Finally checking if that matches the given test

function solution(str, ending) {
    return str.slice(str.length - ending.length, str.length) === ending
}

// Best. Didn't realize "endsWith" was a method. Learned something new :)

function solution(str, ending) {
    return str.endsWith(ending);
}