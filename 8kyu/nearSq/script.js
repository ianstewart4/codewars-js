// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// My solution
// Wanted to do it without methods which wasn't as simple

function nearestSq(n) {
    let i = n //descending
    let j = n //ascending
    let nearSq = 0
    while (!nearSq) {

        if (i ** (1 / 2) % 1 === 0) {
            nearSq = i
        }
        if (j ** (1 / 2) % 1 === 0) {
            nearSq = j
        }
        i--
        j++
    }
    return nearSq
}

// "Best"

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);