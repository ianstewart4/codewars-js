// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// My solution

function cubeOdd(arr) {
    const cubed = arr.map(x => x ** 3).filter(x => x % 2 !== 0).reduce((a, b) => a + b, 0)
    return cubed === 0 ? 0 : cubed || undefined
}