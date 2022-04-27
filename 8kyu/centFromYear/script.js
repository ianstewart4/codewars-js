// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// My solution
// This one was surprisingly tricky for an 8. It just took a moment to think it through, and also remembering how centuries work...

function century(year) {
    return Math.ceil(year / 100)
}

// Best

const century = year => Math.ceil(year / 100)