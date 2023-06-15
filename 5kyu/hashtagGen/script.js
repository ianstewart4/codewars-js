// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My solution

function generateHashtag (str) {
  if(str.trim() === '') return false
  const strMap = str.split(' ').map(str => {
         const len = str.replace(' ', '').length
       return len > 1 ? str[0].toUpperCase() + str.slice(1) 
       : 
       len === 1 ? str[0].toUpperCase() 
       : 
       ''})
         .join('')
  if(strMap.length >= 140) return false
  return `#${strMap}`
}