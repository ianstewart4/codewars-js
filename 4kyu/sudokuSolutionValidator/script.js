

// My solution
// First 4! Took a little while due to one small hangup: needing to reassign concat!
// I could have used abstraction/encapsulation to cut the code down. Perhaps I will return and refactor

function validSolution(board) {
    // checking vertical and horizontal
    for (let i = 0; i < board.length; i++) {
        let vertArr = []
        // creates a vertical array by taking the value from column i row j
        for (let j = 0; j < board[i].length; j++) {
            vertArr.push(board[j][i])
        }
        // checks vertical line
        if ([... new Set(vertArr)].length < 9) {
            return false
        }
        // checks horizontal line
        if ([... new Set(board[i])].length < 9) {
            return false
        }
    }
    // take 3 rows at a time and split them between left, right, center to check blocks
    for (let i = 0; i < board.length; i += 3) {
        // (re)sets left, center, right arrays
        let left = []
        let center = []
        let right = []
        // chops up each row into left right center and adds to their respective grouping to check later
        for (let j = i; j < (i + 3); j++) {
            left = left.concat(board[j].slice(0, 3))
            center = center.concat(board[j].slice(3, 6))
            right = right.concat(board[j].slice(6, 9))
        }
        // Checks each grouping
        if ([... new Set(left)].length < 9) {
            return false
        }
        if ([... new Set(center)].length < 9) {
            return false
        }
        if ([... new Set(right)].length < 9) {
            return false
        }
    }
    return true
}

// Best
// I'm not sure this would hold up under testing. A line/block could have two 1s and two 9s and still pass because it could still add up to 45

function equals45(n) {
    return n == 45;
}

function validSolution(board) {
    var sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    osums = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            sumh[i] += board[i][j];
            sumv[j] += board[i][j];
            osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
        }
    }
    for (var i = 0; i < 3; i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
}

// Best in my opinion
// Loooove this one
// Like a way more efficient version of my own although a little dense for my liking

function validSolution(board) {
    var validSet = s => s.size == 9 && !s.has(0);
    var rowSet = i => board[i].reduce((s, v) => s.add(v), new Set());
    var columnSet = i => board.reduce((s, v) => s.add(v[i]), new Set());
    var boxSet = ([r, c]) => board.slice(r, r + 3).reduce((s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s), new Set());
    var boxCorner = i => [Math.floor(i / 3) * 3, (i % 3) * 3];
    for (var i = 0; i < 9; i++)
        if (!validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))))
            return false;
    return true;
}