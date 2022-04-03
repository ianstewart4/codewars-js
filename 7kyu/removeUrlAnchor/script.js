// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solution
// Betting this is the shortest. Will keep this even if I'm wrong 

function removeUrlAnchor(url) {
    return url.split('#')[0]
}

// Technically shorter because arrow function

const removeUrlAnchor = (url) => url.split("#")[0];