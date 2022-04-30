

// My solution
// Straightforward. check each entry and check if age > 55, if true check handicap > 7 return Senior if both true and Open otherwise
// I used a chained ternary but easily could have combined them using &&. I think mine may be theoretically more efficient since it won't need to check as many values

function openOrSenior(data) {
    return data.map(datum => datum[0] < 55 ? "Open" : datum[1] > 7 ? "Senior" : "Open")
}

// Best
// I really like that it doesn't require comments, which is always ideal whenever possible. 

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }