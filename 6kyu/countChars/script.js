// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution

function count(string) {
    let sMap = {}
    for (let letter of string) {
        if (sMap.hasOwnProperty(letter)) {
            sMap[letter]++
        } else {
            sMap[letter] = 1
        }
    }
    return sMap;
}

// Best
// Similar idea but implemented differently

function count(string) {
    var count = {};
    string.split('').forEach(function (s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}