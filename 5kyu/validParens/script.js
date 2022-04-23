


// My solution
// have '(' = +1 and ')' = -1. Count must end at zero and if it is ever negative return false since that would mean there was a closing bracket before an opening one. 

function validParentheses(parens) {
    let checker = 0

    for (let i = 0; i < parens.length; i++) {
        if (checker < 0) { 
            return false
        } else if (parens[i] == '(') {
            checker += 1
        } else {
            checker -= 1
        }
    }
    return checker == 0 ? true : false
}

// Best
// Again, same thinking as me but cleaner implementation. 

function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}