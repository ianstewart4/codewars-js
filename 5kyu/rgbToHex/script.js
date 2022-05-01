// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// My solution
// I think this could have been done more concisely but 

const rgb = function (r, g, b) {
    function toHex(RGB) {
        if (RGB <= 0) { return '00' } // set the floor value
        if (RGB > 255) { return 'FF' } // sets the ceiling value 

        // calc first digit
        let first = Math.floor(RGB / 16) // whole number will point to first position of Hex value
        if (first > 9) { first = String.fromCharCode(first % 10 + 65) }
        // calc second digit
        let second = ((RGB / 16) - (Math.floor(RGB / 16))) * 16
        if (second > 9) { second = String.fromCharCode(second % 10 + 65) }
        return `${first}${second}`
    }
    return toHex(r) + toHex(g) + toHex(b)
}

// Favourite
// I love that they used map instead of making a separate function
// Also learned toString(16) gives the hex value!

function rgb(r, g, b) {
    return [r, g, b].map(function (x) {
        return ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2); // adds the zero in case it's below the threshold to generate a value with length > 1 then uses slice to remove it if necessary, very clever
    }).join('').toUpperCase();
}