// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// My solution

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

// Best
// Same same

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}