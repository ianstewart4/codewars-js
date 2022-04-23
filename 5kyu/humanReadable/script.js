// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


// My solution
// This one didn't feel clever but got the job done.
// I'm sure there will be some 9000IQ regex answer 
// I notice other solutions used a "pad" function. I suppose the giveaway for me should have been that I had 3 IF statements all doing essentially the same thing

function humanReadable(seconds) {
    let hours = String(Math.floor(seconds / 3600))
    let minutes = String(Math.floor(seconds % 3600 / 60))
    let second = String(seconds % 3600 % 60)
    if (hours.length < 2) {
        hours = '0' + hours
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes
    }
    if (second.length < 2) {
        second = '0' + second
    }
    return `${hours}:${minutes}:${second}`
}

// Best
// Surprisingly not regex, and I noticed multiple people created a pad function which is new to me but seems to be common practice.

function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; } // if it's a one digit number it "pads" it with a leading 0
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }