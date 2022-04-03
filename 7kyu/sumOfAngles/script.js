// Description:
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.


// My solution
// This was a really easy one, although I was tired when I wrote this and made it longer than I needed
// I was thinking: 3 starts at 180, then add 180 for each corner you add. 

function angle(n) {
    return (n - 3) * 180 + 180
}

// Should be:

function angle(n) {
    return (n - 2) * 180
}