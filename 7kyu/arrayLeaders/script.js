// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// My solution

function arrayLeaders(numbers) {
    const leaders = []
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] > numbers.slice(i).reduce((a, b) => a + b)) {
            leaders.push(numbers[i - 1])
        }
    }
    if (numbers[numbers.length - 1] > 0) {
        leaders.push(numbers[numbers.length - 1])
    }
    return leaders
}