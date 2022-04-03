// My solution

function getDivisorsCnt(n) {
    let divisors = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors += 1
        }
    }
    return divisors
}

// Best solution
// Basically the same but a little cleaner

function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }

    return d;
}