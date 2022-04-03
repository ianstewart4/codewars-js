// My solution
// this one was pretty simple but took a little more time to work out in my mind.

function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}

// Best solution
// I think this one is really simple but clever and a little more naturally intuitive

function roundToNext5(n) {
    while (n % 5 !== 0) n++;
    return n;
}

