// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// My solution

function alternateCase(s) {
  let t = ''
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      t += s[i].toLowerCase()
    }else{
      t += s[i].toUpperCase()
    }
  }
  return t
}