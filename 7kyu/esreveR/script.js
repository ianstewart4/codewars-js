// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// My solution

const reverse = function(array) {
  const revArr = []
  for(let i = array.length - 1; i >= 0; i--){
    revArr.push(array[i])
  }
  return revArr
}