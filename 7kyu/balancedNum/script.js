// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// My solution

function balancedNum(number){
  const strNum = number.toString()
  let leftSum = 0
  let rightSum = 0
  let start = 0
  let end = strNum.length - 1

  while(start + 1 < end){
    leftSum += Number(strNum[start])
    rightSum += Number(strNum[end])
    start++
    end--
    }
    
  return leftSum === rightSum ? "Balanced" : "Not Balanced"
}