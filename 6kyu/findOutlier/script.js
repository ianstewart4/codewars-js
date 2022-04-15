// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// My solution
// I for sure made this way longer than was really necessary but I got the idea and ran with it. 
// Basically we needed to figure out how to know if the outlier was even or odd. 
// By checking the first 2-3 items in the array we could know this.
// If the first 2 are odd then clearly the outlier had to be even, and vice versa. 
// If the first 2 don't match, one of them is the outlier, and whatever the 3rd item is, will be the non-outlier category (odd or even)

function findOutlier(integers) {
    // first 2 nums even, so we're looking for odd
    if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                return integers[i]
            }
        }
    } else if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0) { // if first 2 nums odd, we're looking for the even
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                return integers[i]
            }
        }
    } else if (integers[2] % 2 === 0) { // first 2 didn't match, if 3rd is even we're looking for the odd
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                return integers[i]
            }
        }
    } else { // first 2 didn't match, if 3rd is even we're looking for the even
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                return integers[i]
            }
        }
    }
}

// Best
// This one is genius.
// One array filters out odds, another filters out evens, whichever has length 1 is the outlier. Love it. 
// I need to think of these kinds of solutions more (using length)

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}