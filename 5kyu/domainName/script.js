// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// My solution

function domainName(url) {
    // first remove everything before '//' if there are any
    url = url.split('//')[1] ?? url

    // then check if it has 'www' before first '.', if yes return second part, else first
    return url.split('.')[0] === 'www' ? url.split('.')[1] : url.split('.')[0]
}