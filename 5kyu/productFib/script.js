// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 

// My solution

function productFib(prod){
    let lastFib = 0
    let currentFib = 1
    let nextFib = 1
    let nextFibBin
    let fibProd = 0
    while(fibProd <= prod){
      fibProd = currentFib * nextFib
      nextFibBin = nextFib
      lastFib = currentFib
      nextFib += currentFib
      currentFib = nextFibBin
      if(fibProd === prod) return [lastFib, currentFib, true]
    }
    return [lastFib, currentFib, false]
  }