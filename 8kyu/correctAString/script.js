// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My solution

function correct(string) {
    let stringArr = string.split('')
    let letterString = []
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] == '0') {
            letterString.push('O')
        } else if (stringArr[i] == '5') {
            letterString.push('S')
        } else if (stringArr[i] == '1') {
            letterString.push('I')
        } else {
            letterString.push(stringArr[i])
        }

    }
    return letterString.join('')
}

// Best... Regex

correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
