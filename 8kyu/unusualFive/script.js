// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// My solution
// After having looked at the answers it's interesting how probably the most obvious solution completely didn't occur to me. Instead I chose a less efficient version of it. Need to remember to ask the question: how can I make this better?

function unusualFive() {
    const strArr = ['a', 'b', 'c', 'd', 'e', 'f']
    return strArr.indexOf('f')
}

// Best

function unusualFive() {
    return 'DaniQ'.length
}