// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution
// Very simple, just return the number multiplied by 8 or 9 depending on the parity of the number.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

// Best 
// Interesting variant of my solution.

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}