// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// My solution

function toCsvText(array) {
    return array.map((x, i) => i < array.length - 1 ? x.join(',') + '\n' : x.join(',')).join('')
}

// "Best"
// Uses implicit coercion which isn't ideal as it can have unexpected results

function toCsvText(array) {
    return array.join('\n');
}