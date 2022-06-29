// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// My solution

function validBraces(braces) {
    const bracesArr = braces.split('')
    const openBracesArr = [] // keeps track of the order of the currently open braces 
    for (let i = 0; i < bracesArr.length; i++) {
        // If it's an open brace, add it to the openBraces array
        if (bracesArr[i] == '(' || bracesArr[i] == '{' || bracesArr[i] == '[') {
            openBracesArr.push(bracesArr[i])
        } else if ((bracesArr[i] == ')' && openBracesArr[openBracesArr.length - 1] == '(') ||
            (bracesArr[i] == '}' && openBracesArr[openBracesArr.length - 1] == '{') ||
            (bracesArr[i] == ']' && openBracesArr[openBracesArr.length - 1] == '[')) {
            openBracesArr.pop()
        } else {
            return false
        }
    }
    if (openBracesArr.length) { // In case it's all open braces, which of course is invalid
        return false
    }
    return true
}

// Best

function validBraces(braces) {
    var matches = { '(': ')', '{': '}', '[': ']' };
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar);
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}