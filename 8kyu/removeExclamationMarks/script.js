// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My solution

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

// Best
// Meh, regex

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}