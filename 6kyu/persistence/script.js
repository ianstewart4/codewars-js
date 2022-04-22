// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// My solution

function persistence(num) {
    let count = 0 // number of times digits are multiplied
    let arrNum = String(num).split('') // change to an array in order to get the length (number of digits)
    while (arrNum.length > 1) { // while the number is more than 1 digit
        count += 1 // add count
        let multi = 1 // reset multiplier
        for (let i = 0; i < arrNum.length; i++) { // multiply digits in the number
            multi *= Number(arrNum[i])
        }
        arrNum = String(multi).split('') // setting new arrNum for while loop to check
    }
    return count 
}

// Best
// My mind wasn't quite fresh enough to work in the map and reduce, but this makes so much sense. A much cleaner version of mine.

function persistence(num) {
    var times = 0;

    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }

    return times;
}