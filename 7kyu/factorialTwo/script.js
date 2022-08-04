// Your task is to write function factorial.

// My solution

function factorial(n) {
    if (n == 0) return 1;
    else
        return n * factorial(n - 1);
}

// Best
// I was so close to this one, but ended up using classic if-else

const factorial = n => n ? factorial(n - 1) * n : 1;
