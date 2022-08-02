// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.


// My solution

function rowWeights(array) {
    let arr = [0, 0]
    for (let i = 0; i < array.length; i++) {
        if (i % 2) {
            arr[1] += array[i]
        } else {
            arr[0] += array[i]
        }
    }
    return arr
}

// Best

function rowWeights(array) {
    let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
    let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

    return [t1, t2]
}