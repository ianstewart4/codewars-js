// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...

// Because you're a nice person, you always round up the tip, regardless of the service.

// My solution

function calculateTip(amount, rating) {
    rating = rating.toLowerCase()
    const tipScale = {
        'terrible': 0,
        'poor': .05,
        'good': .10,
        'great': .15,
        'excellent': .20
    }
    if (rating === 'terrible') return 0
    return Math.ceil(amount * tipScale[rating]) || "Rating not recognised"
}