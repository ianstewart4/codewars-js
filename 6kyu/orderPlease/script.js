// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// My solution

function order(words) {
    let wordArr = words.split(' ') // splits string into words to check
    let newArr = []
    for (let i = 0; i < wordArr.length; i++) { // iterates through each position
        for (let j = 0; j < wordArr.length; j++) { // iterates through each word to check if it conrtains number that matches position
            if (wordArr[j].includes(String(i + 1))) { // if the given word number matches the slot
                newArr.push(wordArr[j])
            }
        }
    }
    return newArr.join(' ')
}

// Best
// I do like this one and I wondered if something like this might work, however I'm still trying to avoid leaning on regex as much as possible
// Simply sorts by the containing digit with regex match

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }  