// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// My/Best solution
// Just fixed it in the simplest way

function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}