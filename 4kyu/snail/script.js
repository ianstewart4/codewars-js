// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// My solution

snail = function (array) {
  // takes in array of arrays, returns array
  let newArr = []
  // i = row, j = column [i,j] (I know it's backwards, )
  let i
  let j
  // bounds top,right,bottom, left
  // top would start at 0
  let top = 0
  // right would start at length of array in array
  let right = array[0].length - 1
  // bottom would start at length of array of arrays
  let bottom = array.length - 1
  // left would start at 0 of array in array
  let left = 0

  while (left <= right || bottom >= top) {
    // 4 different processes:
    // TOP
    // Starting at top left, left to right(increment j, hold i), add 1 to top

    if (top <= bottom) {
      i = top
      // newArr.push('TOP')
      for (let j = left; j <= right; j++) {
        newArr.push(array[i][j])
      }
      top += 1
    }
    // RIGHT
    // Starting at top right, top to bottom(hold j, increment i), remove 1 from right

    if (left <= right) {
      j = right
      // newArr.push('RIGHT')
      for (let i = top; i <= bottom; i++) {
        newArr.push(array[i][j])
      }
      right -= 1
    }
    // BOTTOM
    // Starting at bottom right, right to left(decrement j, hold i), add 1 to left

    if (top <= bottom) {
      i = bottom
      // newArr.push('BOTTOM')
      for (let j = right; j >= left; j--) {
        newArr.push(array[i][j])
      }
      bottom -= 1
    }
    // LEFT
    // Start at bottom left, bottom to top(hold j, decrement i, add 1 to left

    if (left <= right) {
      j = left
      // newArr.push('LEFT')
      for (let i = bottom; i >= top; i--) {
        newArr.push(array[i][j])
      }
      left += 1
    }
  }
  return newArr
}

// Favourite
// Next level. 

function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}