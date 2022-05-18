

// My solution
// Google-fu came in handy for this one. 

function dontGiveMeFive(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if ((i + '').indexOf('5') === -1) { // convert i to string, then check index of potential 5, if none it returns -1 and can be added to the array. 
            arr.push(i);
        }
    }
    return arr.length
}

// Best

function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(i)) {
            count++
        }
    }
    return count
}