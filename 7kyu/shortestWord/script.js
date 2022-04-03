// Instructions: Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution - 2 Way
// One way would be to break string into words, use first word as temp shortest then compare each other word and replacing if shorter

function findShort(s) {
    const words = s.split(' ')
    let shWord = words[0]
    for (let word of words) {
        if (word.length < shWord.length) {
            shWord = word
        }
    }
    return shWord.length
}

// Another way to do this would be to split and sort then select first index
// This might be easier and cleaner

function findShort(s) {
    let shWord = s.split(' ').sort((a, b) => a.length - b.length)
    return shWord[0].length
}

// Could be refactored to:

function findShort(s) {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

// Best solution
// This one is really clever. Not really familiar with the apply method, but appears to just let you use the min method with 

function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}