

// My solution

function toWeirdCase(string) {
    let strArr = string.split(' ')
    let weirdArr = []
    for (let i = 0; i < strArr.length; i++) {
        let wordArr = strArr[i].split('')
        console.log(wordArr)
        let weirdWordArr = []
        for (let j = 0; j < wordArr.length; j++) {
            if (j % 2) {
                weirdWordArr.push(wordArr[j])
            } else {
                weirdWordArr.push(wordArr[j].toUpperCase())
            }
        }
        weirdArr.push(weirdWordArr.join(''))
    }
    return weirdArr.join(' ')
}

// Best
// This is what I tried initially but for some reason couldn't get it to work.
// I was doing it with arrow functions in the map methods

function toWeirdCase(string) {
    return string.split(' ').map(function (word) {
        return word.split('').map(function (letter, index) {
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
    }).join(' ');
}

// Arrow function version
// I wasn't

function toWeirdCase(string) {
    return string.split(' ').map((word) => {
        return word.split('').map((letter, index) => {
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
    }).join(' ');
}

// Down to one-liner
// I think I may have been missing the second split

function toWeirdCase(string) {
    return string.split(' ').map((word) => word.split('').map((letter, index) => index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ');
}