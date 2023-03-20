// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// My solution

const orderedCount = function (text) {
    const sMap = {}
    const s = text.split('')
    const countArr = []
    for (let i = 0; i < s.length; i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]] += 1
        } else {
            sMap[s[i]] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        // if it's the first instance, push
        if (s.indexOf(s[i]) === i) {
            countArr.push([s[i], sMap[s[i]]])
        }
    }
    return countArr;
}