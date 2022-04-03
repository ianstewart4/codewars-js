/* Details
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// My solution
// We need to count the instances of each unique element. 
// One way to do this would be to create a new set from the array then check number of occurrences 
// I didn't complete this one but got very close. The only thing I missed was the syntax in the for-in loop. 
// Not bad for my first level 6

function findOdd(A) {
    const count = {}

    for (const element of A) {
        if (count[element]) {
            count[element] += 1
        } else {
            count[element] = 1 // create new key
        }
    }
    for (prop in count) { // I got the syntax wrong in the for-in loop
        // console.log(count[prop]) // was trying count.prop
        if (count[prop] % 2 !== 0) {
            return Number(prop)
        }
    }
}

// Best Solution

// function findOdd(A) {
//   var obj = {};
//   A.forEach(function(el){
//     obj[el] ? obj[el]++ : obj[el] = 1;
//   });

//   for(prop in obj) {
//     if(obj[prop] % 2 !== 0) return Number(prop);
//   }
// }

// Most Clever

//   const findOdd = (xs) => xs.reduce((a, b) => a ^ b); // I'm not really even sure how this works yet