// My solution
// This one was a little too easy to be a 7

function findSum(n) {
    let sumNum = 0
    for (let i = 3; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sumNum += i
        }
    }
    return sumNum
}