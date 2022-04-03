// My solution 
// I overcomplicated this a little. There were so many tests and there was always 1 or 2 that wouldn't pass.
// Eventually I looked at the bug report and someone mentioned checking the condition at the end.
// That fixed it for 1 fail but then a different fail popped up. I moved yearCount to the beginning and that resolved it. 

function nbYear(p0, percent, aug, p) {
    let yearCount = 0
    while (p0 <= p) {
        yearCount++
        p0 += Math.floor(p0 * percent / 100)
        p0 += aug
        if (p0 >= p) { 
            return yearCount 
        }
    }
    return yearCount
}

// Best solution
// I like this one much better. It didn't even occur to me to use a for loop.

function nbYear(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}