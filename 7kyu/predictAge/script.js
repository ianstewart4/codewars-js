// My solution, another very easy one, took around 1 minute

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    return Math.floor(Math.sqrt(age1 ** 2 + age2 ** 2 + age3 ** 2 + age4 ** 2 + age5 ** 2 + age6 ** 2 + age7 ** 2 + age8 ** 2) / 2)
}

// Best solution
// I like this one because it is cleaner and doesn't require adjusting the parameters and just let you copy paste them into the function
// Also allows using map and reduce methods which makes sense for something like this, although I need to review the reduce method. The way it's used here is slightly confusing to me. 

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b, c) => b + c)) / 2)
}