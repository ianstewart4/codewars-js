// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// My solution

function highestRank(arr) {
    let maxLength = 0
    let highestRank
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(x => x === arr[i]).length > maxLength) {
            maxLength = arr.filter(x => x === arr[i]).length
            highestRank = arr[i]
        }
    }
    return highestRank
}