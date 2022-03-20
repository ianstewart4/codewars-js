// Details
/*
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive 
// integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception 
// of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a 
// RangeError (JavaScript) or ValueError (Python) or return -1 (C).

*/

// My Solution (10 mins)

function factorial(n){
    // Calculate the factorial here
    let product = 1
    if(n >= 0 && n <= 12){
      for(let i = 1; i <= n; i++){
        product *= i
      }
    }else if(n === 0){
      return product  
    }else{
      throw new RangeError() // learned how to throw a range error
    }
    return product
  }


// Best Solution

function factorial(n) {
    if (n < 0 || n > 12) // basically selecting the inverse of the range I did with && 
      throw new RangeError(); // throws error in that range
    return n <= 1 ? 1 : n * factorial(n - 1); // (ternary)if n <= 1 return 1, else n * factorial(n - 1) (recursion, good idea)
  }