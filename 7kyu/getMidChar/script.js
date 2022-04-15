
// GET MIDDLE CHARACTER(s) of string
// My solution
// Honestly I think this is difficult to read but I managed to pass all tests first try. 
// It checks if the string is even or odd length
// If even, it return the middle two characters, if odd, it returns only the middle character. 

function getMiddle(s) {
    return s.length % 2 === 0 ? `${s.split('')[(s.length / 2) - 1]}${s.split('')[(s.length / 2)]}` : `${s.split('')[((s.length - 1) / 2)]}`
}

// Best
// Similar strategy, more clever in how they go about it. 
// checking MDN, substr is deprecated and no longer recommended, but it returns a portion of the string with parameters being (start,length)
// So this would find the correct start point: (odd) 3 / 2 = 1.5 - 1 = .5 ceil = 1 (even) 4 / 2 = 2 - 1 = 1 ceil = 1
// If it's even, length is 2, otherwise (odd) it's 1

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}