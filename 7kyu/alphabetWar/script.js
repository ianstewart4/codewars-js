// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// My solution

function alphabetWar(fight) {
    // p-r: string -> string
    // create object for letter power for each side
    const leftPow = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1
    }
    const rightPow = {
        'm': 4,
        'q': 3,
        'd': 2,
        'z': 1
    }
    // create scoreCounter for each side
    let leftScore = 0
    let rightScore = 0

    // for each letter, if in left, add to left score, if in right add to right score.
    for (let i = 0; i < fight.length; i++) {
        if (leftPow.hasOwnProperty(fight[i])) {
            leftScore += leftPow[fight[i]]

        } else if (rightPow.hasOwnProperty(fight[i])) {
            rightScore += rightPow[fight[i]]
        }
    }

    return leftScore == rightScore ? "Let's fight again!" : leftScore < rightScore ? 'Right side wins!' : 'Left side wins!';
}

// Best
// Genius

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}