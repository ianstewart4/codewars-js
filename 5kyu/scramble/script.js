// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My solution

function scramble(str1, str2) {
    const sMap = {}
    for(let i = 0; i < str1.length; i++){
      if(sMap[str1[i]]){
        sMap[str1[i]]++
      }else{
        sMap[str1[i]] = 1
      }
    }
    for(let j = 0; j < str2.length; j++){
      if(!sMap[str2[j]]) return false
      if(sMap[str2[j]] > 0){
        sMap[str2[j]]--
      }
      if(sMap[str2[j]] < 0) return false
    }
    return true;
  }
  