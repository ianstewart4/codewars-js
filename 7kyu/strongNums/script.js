// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// My solution

function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

function strong(n) {
  const factorialSum = String(n).split('').reduce((a,b) => a + fac(+b), 0)
  return factorialSum == n ? "STRONG!!!!" : "Not Strong !!"
}