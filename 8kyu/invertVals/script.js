// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == [

// My solution. num or x might have been better naming but I've gotten in the habit of using el.

function invert(array) {
    return array.map(el => el *= -1)
}

// Best

function invert(array) {
    return array.map(x => x === 0 ? x : -x);
}