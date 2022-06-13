

// My solution
// Compare the proceeding letter to the preceding letter. If the char code of the proceeding is not preceding + 1
function findMissingLetter(arr) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i].charCodeAt() - 1 != arr[i - 1].charCodeAt()) {
            return String.fromCharCode(arr[i - 1].charCodeAt() + 1)
        }
    }
}

// Best
// Odd because it has unnecessary code with the error handling. 

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")
}