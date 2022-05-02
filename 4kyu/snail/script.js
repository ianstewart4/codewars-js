


// My solution
snail = function(array) {
    // There are 4 steps that once complete can be repeated
    // for each step I need 3 parameters: Start, iterations, trigger for next step
    // Step 1: [x0,y0] --> y++ --> [x,y.length]
    // Step 2: [x,y.length] --> x++ --> [x.length,y.length]
    // Step 3: [x.length,y.length] --> y-- --> [x.length,y0]
    // Step 4: [x.length,y0] --> x-- --> [x1,y0]
    // console.log(array)
    let snailArr = []
    let add = 0
    let countX = array[0].length
    let countY = array.length
    

    
  
    return snailArr
  }
  
  // let test = [[0, 1, 2, 3, 4]]
  
  // console.log(snail(test))
  
//   let test = [[]]
//   let test1 = [[1]]
  
//   console.log(test[0].length)
//   console.log(test1[0].length)
console.log(snail([[]])) // []
  
console.log(snail([[1]])) // [1]
  
//   console.log(snail([[1, 2, 3], 
//                      [4, 5, 6], 
//                      [7, 8, 9]])) 
  
  // //[1, 2, 3, 6, 9, 8, 7, 4, 5]
              
  // console.log(snail([[1, 2, 3, 4, 5], 
  //                    [6, 7, 8, 9, 10], 
  //                    [11, 12, 13, 14, 15], 
  //                    [16, 17, 18, 19, 20], 
  //                    [21, 22, 23, 24, 25]]))
  
  // //[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
  
  // console.log(snail([[1,  2,   3,  4,  5, 6], 
  //                    [20, 21, 22, 23, 24, 7], 
  //                    [19, 32, 33, 34, 25, 8], 
  //                    [18, 31, 36, 35, 26, 9], 
  //                    [17, 30, 29, 28, 27, 10], 
  //                    [16, 15, 14, 13, 12, 11]]))
  
  // // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
  