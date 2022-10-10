// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// tidyNumber (12) ==> return (true)
// tidyNumber (32) ==> return (false)
// tidyNumber (1024) ==> return (false)

// My solution

function tidyNumber(n) {
    return Number(String(n).split('').sort((a, b) => a - b).join('')) === n
}