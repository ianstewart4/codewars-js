// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// My solution

//return the total number of smiling faces in the array
function countSmileys(arr) {
    function checkSmiley(str) {
        let face = str.split('')
        if (face[0] == ':' || face[0] == ';') {
            if (face[1] == '~' || face[1] == '-') {
                if (face[2] == ')' || face[2] == 'D') {
                    return true
                }
            }
            if (face[1] == ')' || face[1] == 'D') {
                return true
            }
        }
        return false
    }
    return arr.filter(face => checkSmiley(face)).length
}

// Best (non-regex solution)
// I considered doing something like this but wanted to use a more programmatic approach.

function countSmileys(arr) {
    var smileys = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < smileys.length; j++) {
            if (arr[i] === smileys[j]) {
                count++;
            }
        }
    }
    return count;
}