// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

// My solution

function nextBigger(n) {
    function nextBig(n){
        let match = false
        let nextBigNum = n
        let checkNum = +String(n).split('').map(x => Number(x)).sort((a, b) => b - a).join('')
        while(!match){
            nextBigNum++
            if(checkNum === +String(nextBigNum).split('').map(x => Number(x)).sort((a, b) => b - a).join('')){
                match = true
            }
        }
        return nextBigNum
    }
    // the highest possible number, (sorted descending makes it the biggest)
    let biggestNum = +String(n).split('').map(x => Number(x)).sort((a, b) => b - a).join('')

    return biggestNum === n ? -1 : nextBig(n)
    
}

let value = 512

console.log(nextBigger(value))