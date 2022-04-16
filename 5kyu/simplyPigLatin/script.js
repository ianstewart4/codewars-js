

// My solution
// I imagine someone has a one-liner for this. 
// This one I could not do without regex, or at least not very easily at all. 

function pigIt(str) {
    return str
        .split(' ')
        .map(word => {
            if (!word.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)) {
                return `${word.slice(1)}${word.slice(0, 1)}ay`
            } else {
                return word
            }
        })
        .join(' ')
}

// Best.
// As I suspect, a brief one-line:
// I don't really like this one. Not really fun. Just advanced-level regex. Meh

function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// Next best
// I actually much prefer this one. Doesn't lean on regex too much at all

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}