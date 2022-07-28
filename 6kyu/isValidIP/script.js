

// My solution
// Not pretty or concise but gets the job done.

function isValidIP(str) {
    const regExp = /[a-zA-Z]/g;
    const strArr = str.split('.')

    if (strArr.length !== 4) {
        return false
    }

    for (let i = 0; i < strArr.length; i++) {
        if ((strArr[i].length == 2 && +strArr[i] < 10) ||
            (strArr[i].length == 3 && +strArr[i] < 100) ||
            (+strArr[i] > 255) || +strArr[i] < 0 || +strArr[i] > 255 ||
            strArr[i] == '' || strArr[i].indexOf(' ') >= 0 || regExp.test(strArr[i])) {
            return false
        }
    }
    return true
}

// Not "Best" but favourite. 
// Really organized and clear

// Pure function
function isValidIP(str) {
    const octets = str.split('.')             // Split into octets
    return (octets.length === 4) &&           // Ensure str has exactly 4 octets
        octets.reduce((acc, octet) =>           // Check all octets
            (acc === true) &&                       // Ensure prior octets okay
            (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
            (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
            (Number(octet) <= 255)                  // Ensure octet is 255 or less
            , true)
}