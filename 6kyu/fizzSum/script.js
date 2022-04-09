// Description:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// MY SOLUTION
// This is apparently the most popular 6kyu and I can see why. Pretty easy, basically fizzbuzz, which it's fun
// At least for my own solution it brought together a lot of my favorite things
// arrays, for loop, if statement, OR, modulus, evaluating for falsy value, reduce. love it

function solution(number) {
    if (number <= 0) { return 0 }
    let sumNums = []
    for (let i = 0; i < number; i++) {
        if (!(i % 3) || !(i % 5)) {
            sumNums.push(i)
        }
    }
    return sumNums.reduce((a, b) => a + b)
}

// BEST SOLUTION 
// Sometimes it's interesting to notice when I find a totally overcomplicated solution
// In this case, finding the sum with an array and reduce. Maybe just because I love reduce, but I think it was actually 
// because of the way I first visualize the problem, by imagining an array and dropping numbers that weren't a multiple of 3 or 5. 

function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}