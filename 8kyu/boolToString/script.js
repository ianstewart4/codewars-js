// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// My solution

function booleanToString(b) {
    return String(b)
}

// Others:

function booleanToString(b) {
    return b.toString();
}

// I like this one

function booleanToString(b) {
    return b ? 'true' : 'false';
}