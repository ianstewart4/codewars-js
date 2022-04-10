// Multiplication table

// Description:
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// MY SOLUTION
// This one was pretty easy for a 6. First trY.
// Helped substantially to write it out first. Very easy at that point.

multiplicationTable = function (size) {
    let table = []
    for (let i = 1; i <= size; i++) {
        let row = []
        for (let j = 1; j <= size; j++) {
            row.push(i * j)
        }
        table.push(row)
    }
    return table
}

// Best practice
// Essentially the same thing as mine but without using push. 

multiplicationTable = function (size) {
    var result = [];

    for (var i = 0; i < size; i++) {
        result[i] = [];
        for (var j = 0; j < size; j++) {
            result[i][j] = (i + 1) * (j + 1);
        }
    }

    return result
}
