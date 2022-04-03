// My solution
// Quite easy. I know I could have made it 

function squareDigits(num) {
    let squaredNum = String(num).split('')
    squaredNum = squaredNum.map(x => Number(x) ** 2)
    squaredNum = squaredNum.join('')
    return Number(squaredNum)
}

// Best solution
// This is basically the same thing but harder to read in my opinion

function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));

}