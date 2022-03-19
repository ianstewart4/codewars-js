function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Number.isInteger(Math.sqrt(sq))) {
        sq += 1
        while (!Number.isInteger(Math.sqrt(sq))) {
            sq += 1
        }
        return sq
    }
    return -1;
}

/***************
BEST PRACTICE
***************/

// function findNextSquare(sq) {
//     return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
//   }