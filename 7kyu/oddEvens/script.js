// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .

// My solution

function menFromBoys(arr){
  arr = [...new Set(arr)]
  return [...arr.filter(x => Math.abs(x) % 2 === 0).sort((a,b) => a - b), ...arr.filter(x => Math.abs(x) % 2 === 1).sort((a,b) => b -a)]
}