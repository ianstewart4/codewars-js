// My solution. Ultra easy. Took approx 30 seconds 

function repeater(string, n){
    let newStr = '' // create new string
    for(let i = 0; i < n; i++){ // repeats n times
      newStr += string // adds the given string to the new string created
    }
    return newStr
  }

// Best solution

const repeater = (string, n) => {
    return string.repeat(n); // uses repeat method. Wasn't aware of this until now. 
  }