// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// My Solution
// Evidence that it makes sense to still work on 7s for more than just numbers. I learned a lot and solidified a concept. 
// This was a new one for me. I had to look it up but of course it's like a normal object method. Still a bit unusual for me. 

String.prototype.toJadenCase = function () {
    var str = this
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(' ')
};

// Best
// This one implemented it in a way that makes more sense and looks better
// This also oddly helps solidify how the concept of polymorphism in OOP is actually implemented, which I was having trouble wrapping my mind around. 

String.prototype.toJadenCase = function () {
    return this.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}