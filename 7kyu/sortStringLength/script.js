// My solution. Same as the best solution. Could also be done with an anonymous function.
// I had to google how to use the sort method to sort the array by length.
// Essentially the same syntax as the reduce method.

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };