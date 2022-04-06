// 7kyu

// Instructions
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// My solution - at a point where 7s are quite easy and only take like 2-5 mins.
// I forgot about the replace method. Regex felt like the only way to solve in this case. 

function disemvowel(str) {
    return str.split('').map(word => word.replace(/[aeiou]/gi, '')).join('')
}

// Best solution
// Actually pretty close to what I originally had. I didn't need to use map and could have just used replace

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}