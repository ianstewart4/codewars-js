// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My solution
// I was determined to use reduce since I don't use it enough. My instinct was to use a for loop or forEach but I made reduce work.

function points(games) {
    return games.reduce((a, c) => {
        return c[0] > c[2] ? a + 3 : c[0] < c[2] ? a : a + 1
    }, 0)
}

// "Best" solution
// I'd argue this is quite a bit harder to read than my solution, but is essentially the same thing. 

const points = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)