// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// My solution

function sortMyString(S) {
  const even = S.split('').filter((x, i) => i % 2 == 0).join('')
  const odd = S.split('').filter((x, i) => i % 2 == 1).join('')
  return even + ' ' + odd;
}