// My solution
// I did have to look up the regex syntax as it's still very foreign to me. 

var capitals = function (word) {
    let wordArr = word.split('')
    let indexArr = []
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].match(/[A-Z]/) != null) {
            indexArr.push(i)
        }
    }
    return indexArr
};

// Best solution
// This is probably closer to what I'd have come up with if I hadn't recently learned about the power of regex

var capitals = function (word) {
    var caps = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};