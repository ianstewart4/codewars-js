// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// My solution
// GOAL: create object, add key-value pairs if it is non-zero, create array to add stringified components, if array greater than 2, loop through all but the last item then add "and" + item

function formatDuration(seconds) {
    // If it gives 0 seconds, they want 'now' returned
    if (seconds === 0) {
        return 'now'
    }
    // create object "duration"
    const dur = {};
    // if seconds > year, add dur.years = x, subtract year seconds from seconds
    // if remainging seconds > month, add dur.months = x, subtract month seconds from seconds
    if (seconds >= (86400 * 365)) { // years
        dur.year = Math.floor(seconds / (86400 * 365));
        seconds %= (86400 * 365);
    }
    if (seconds >= 86400) { // days
        dur.day = Math.floor(seconds / 86400);
        seconds %= 86400;
    }
    if (seconds >= 3600) { // hours
        dur.hour = Math.floor(seconds / 3600);
        seconds %= 3600;
    }
    if (seconds >= 60) { // minutes
        dur.minute = Math.floor(seconds / 60);
        seconds %= 60;
    }
    if (seconds >= 1) { // seconds
        dur.second = seconds
    }

    // create array to hold string components, this way we can join all but the last, so we can add the "and" for the last
    let durArr = []
    // for each unit that was added to the dur object, add the stringified version to durArr
    for (let unit in dur) {
        if (dur[unit] > 1) {
            durArr.push(`${dur[unit]} ${unit}s`)
        } else {
            durArr.push(`${dur[unit]} ${unit}`)
        }
    }
    // create string to return
    let durStr = ''
    // If it is greater than 2, it will need commas (should be 1 but they request incorrect punctuation!!!), if it equals 2 it will just pass the for loop
    if (durArr.length >= 2) {
        for (let i = 0; i < durArr.length - 2; i++) {
            durStr += `${durArr[i]}, `
        }
        durStr += `${durArr[durArr.length - 2]} ` // second last item
        durStr += `and ${durArr[durArr.length - 1]}` // last item
    } else {
        durStr += `${durArr[durArr.length - 1]}` // if there is only 1 item
    }
    return durStr
}

// Best
// Very similar process to mine but way more concise with some much more advanced techniques. 

function formatDuration(seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}