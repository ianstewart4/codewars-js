// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// My solution

// Straightforward. check each entry and check if age > 55, if true check handicap > 7 return Senior if both true and Open otherwise
// I used a chained ternary but easily could have combined them using &&. I think mine may be theoretically more efficient since it won't need to check as many values

function openOrSenior(data) {
    return data.map(datum => datum[0] < 55 ? "Open" : datum[1] > 7 ? "Senior" : "Open")
}

// Best
// I really like that it doesn't require comments, which is always ideal whenever possible. 

function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}