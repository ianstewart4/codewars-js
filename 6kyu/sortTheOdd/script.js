// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// My solution
// First create a sorted array of the filtered odd elements, then iterate through the array, if odd, replace with element 1 by 1 from the sorted array. 

function sortArray(array) {
    let sortedOdds = array.filter(x => Math.abs(x) % 2 === 1).sort((a, b) => a - b)
    let element = 0 // element counter to iterate through sortedOdds to replace in original array.

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === 1) {
            array[i] = sortedOdds[element]
            element++
        }
    }
    return array
}

// Best
// Way cleaner version of what i had and using map instead of a for loop. 

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}