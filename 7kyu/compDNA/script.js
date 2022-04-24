


// My Solution
// Got a chance to implement a simpler version of someone else's solution I just saw. I really like it

function DNAStrand(dna) {
    const opposites = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' }
    return dna.split('').map(letter => opposites[letter]).join('')
}

// Best
// Basically everyone used the same method with slight variations in implementation. 

var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}