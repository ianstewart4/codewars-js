// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// My solution

// O(n)

function sumPairs(ints, s) {
  const sMap = new Map()
  let smallest2Index = ints.length
  let currentPair
  
  // Set sMap with value, index pairs
  for(let i = 0; i < ints.length; i++){
    sMap.set(ints[i], i)
  }
  // Check 
  for(let j = 0; j < ints.length; j++){
    if(sMap.get(s - ints[j]) && // Exists
       sMap.get(s - ints[j]) !== j && // Does not take the same index twice
       sMap.get(s - ints[j]) > j && // Does not swap the indexes to achieve a lower second index
       sMap.get(s - ints[j]) < smallest2Index){ // New pair has a smaller second index     
        smallest2Index = sMap.get(s - ints[j])
        currentPair = [ints[j], ints[smallest2Index]]
    }
  }
  return currentPair;
}