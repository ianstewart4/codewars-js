// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// My solution
// Definitely not my finest work, but got the job done. 
// Obviously should not get in the habit of using eval. 
// May refactor at some point

function zero(n = 0) {
    if (typeof n == "string") {
        return eval(`0 ${n}`)
    } else {
        return n
    }
}
function one(n = 1) {
    if (typeof n == "string") {
        return eval(`1 ${n}`)
    } else {
        return n
    }
}
function two(n = 2) {
    if (typeof n == "string") {
        return eval(`2 ${n}`)
    } else {
        return n
    }
}
function three(n = 3) {
    if (typeof n == "string") {
        return eval(`3 ${n}`)
    } else {
        return n
    }
}
function four(n = 4) {
    if (typeof n == "string") {
        return eval(`4 ${n}`)
    } else {
        return n
    }
}
function five(n = 5) {
    if (typeof n == "string") {
        return eval(`5 ${n}`)
    } else {
        return n
    }
}
function six(n = 6) {
    if (typeof n == "string") {
        return eval(`6 ${n}`)
    } else {
        return n
    }
}
function seven(n = 7) {
    if (typeof n == "string") {
        return eval(`7 ${n}`)
    } else {
        return n
    }
}
function eight(n = 8) {
    if (typeof n == "string") {
        return eval(`8 ${n}`)
    } else {
        return n
    }
}
function nine(n = 9) {
    if (typeof n == "string") {
        return eval(`9 ${n}`)
    } else {
        return n
    }
}

function plus(n) {return `+ ${n}`}
function minus(n) {return `- ${n}`}
function times(n) { return `* ${n}` }
function dividedBy(n) { return `/ ${n}>>0` } // to get int value

// Best*
// * Not best technically but made more sense to me than the higher scored one

function zero(func) { return func ? func(0) : 0; };
function one(func) { return func ? func(1) : 1; };
function two(func) { return func ? func(2) : 2; };
function three(func) { return func ? func(3) : 3; };
function four(func) { return func ? func(4) : 4; };
function five(func) { return func ? func(5) : 5; };
function six(func) { return func ? func(6) : 6; };
function seven(func) { return func ? func(7) : 7; };
function eight(func) { return func ? func(8) : 8; };
function nine(func) { return func ? func(9) : 9; };

function plus(b) { return function (a) { return a + b; }; };
function minus(b) { return function (a) { return a - b; }; };
function times(b) { return function (a) { return a * b; }; };
function dividedBy(b) { return function (a) { return a / b; }; };