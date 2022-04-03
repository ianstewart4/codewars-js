// My solution
// This was also fairly easy. Didn't seem like a 7

function sumTriangularNumbers(n) {
    let sumTri = 0
    let result = 0
    if (n < 1) {
        return 0
    }
    for (let i = 1; i <= n; i++) {
        sumTri += i
        result += sumTri
    }
    return result
}

// Best Solution

function sumTriangularNumbers(n) {
    return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
  }