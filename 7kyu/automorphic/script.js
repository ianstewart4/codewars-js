// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

// My solution

function automorphic(n){
  // n squared contains n at the end if you subtract n and it can be evenly divided by 10^(n digits - 1)
  const divisor = +`1${'0'.repeat(n.toString().length)}`
  if((n**2 - n )% divisor === 0) return 'Automorphic'
  return 'Not!!'
}