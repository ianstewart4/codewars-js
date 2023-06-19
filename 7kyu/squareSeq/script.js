// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// My solution

function squares(x, n) {
  const arr = []
  for(let i = 0; i < n; x*=x, i++){
    arr.push(x)
  }
  return arr
}

// Clever solution I liked:

function squares(x, n) {
  let arr = [];
  if(n === 0 || n < 0) return arr;
  for(let i = x; arr.length < n; i*=i) {
      arr.push(i);
  }
  return arr
}