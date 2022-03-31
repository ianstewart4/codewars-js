// My solution. only doing 7s today because I'm sick and lazy

function getCount(str) {
    var vowelsCount = 0;
    let word = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (const el of word) {
        if (vowels.includes(el)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}

// another one of those rare occasions that I feel like my answer is better than the top answers
// The top top one is better but uses regex which sometimes just feels like cheating

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}

// Regex because I like regex

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}