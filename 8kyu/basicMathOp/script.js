

// My solution
// I originally did this using if statements but was curious if there was a way to turn an operator string into the operator itself and found the eval method which will take a full string and evaluate the values. 
// Upon reading the comments for this method which was marked as "most clever", it is a risky method to use in production because it will evaluate whatever is given and so can be open to injection attacks. It should only be used for fun but should not be considered best practice. 

function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}

// Best 
// Very good example for a switch statement

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}