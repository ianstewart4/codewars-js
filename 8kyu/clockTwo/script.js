// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// My solution
// Very straightforward

function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
}

// Best
// A bit cleaner and DRYer

function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}