

// My solution
// I think I could have done it without using map, but I'm still a bit unfamiliar with the more complex uses of reduce. Something that would be good to practice.

function digPow(n, p) {
    let numArrTot = String(n).split('').map((num, index) => num ** (index + p)).reduce((a, b) => a + b)

    return numArrTot % n === 0 ? numArrTot / n : -1
}

// Refactored to remove unnecessary map

function digPow(n, p) {
    let numArrTot = String(n).split('').reduce((acc, curr, index) => acc + (curr ** (index + p)), 0)

    return numArrTot % n === 0 ? numArrTot / n : -1
}

// Best
// Very similar to mine, but excluding map, and returning using falsy. I always forget to use this, but I also think it acts as self-commenting too so I don't think it's the worst thing to forget. 

function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}

