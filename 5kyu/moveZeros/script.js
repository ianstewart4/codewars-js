// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// My solution (first 5!)
// Managed to keep it fairly simple. The issue I initially ran into was that going through the array normally (start to end) created an issue because as the items in the array were moved to the end, it would cause

function moveZeros(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.push(Number(arr.splice(i, 1)))
        }
    }
    return arr
}

// Best
// Love this solution. One array with the zeros, one with the non-zeros, concat. So simple

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }