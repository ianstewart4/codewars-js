// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My solution

function problem(x) {
    if (typeof x == "string") {
        return "Error"
    }
    return x * 50 + 6
}

// Best
// Same thing but using a ternary

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;
