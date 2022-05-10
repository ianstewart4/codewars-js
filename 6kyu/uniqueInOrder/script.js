// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// My solution

var uniqueInOrder = function (iterable) {
    let filteredArr = []
    let iterArray = iterable

    // if it's an empty array, return an empty array
    if (iterable == []) {
        return []
    }
    // if it's an object, no need to convert the iterable into an array
    else if (typeof iterable === "object") {

        for (let i = 1; i < iterArray.length; i++) {
            if (iterArray[i] !== iterArray[i - 1]) {
                filteredArr.push(iterArray[i - 1])
            }
        }
    } else {
        let iterArray = String(iterable).split('')
        for (let i = 1; i < iterArray.length; i++) {
            if (iterArray[i] !== iterArray[i - 1]) {
                filteredArr.push(iterArray[i - 1])
            }
        }
    }
    filteredArr.push(iterArray[iterArray.length - 1]) // add the last item which isn't captured in the loop
    return filteredArr
}

// Best


function uniqueInOrder(it) {
    var result = []
    var last

    for (var i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push(last = it[i])
        }
    }

    return result
}