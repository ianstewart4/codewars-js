// My solution
// So tired I had to do an 8 and even this was more challenging than it should have been. 

function positiveSum(arr) {
    let pos = arr.filter(num => num > 0)
    return pos.length > 0 ? pos.reduce((a, b) => a + b) : 0
}

// Best solution

function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
        if (arr[i] > 0) {                   // if arr[i] is greater than zero
            total += arr[i];                  // add arr[i] to total
        }
    }
    return total;                         // return total
}