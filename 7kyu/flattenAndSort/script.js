

// My solution

"use strict"; // not sure why but this was included

function flattenAndSort(array) {
    let flatArray = []
    for (let i = 0; i < array.length; i++) {
        flatArray = flatArray.concat(array[i])
    }
    return flatArray.sort((a, b) => a - b);
}

// Best solution
// I wasn't aware that you could concat multiple arrays at the same time. Good to know. 

"use strict";

function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b);
}