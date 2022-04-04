//Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.
// Task: Given the summary, find the number of pages n the book has.

// Example
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

// Be aware that you'll get enormous books having up to 100.000 pages.

// All inputs will be valid.

// My solution:
// Took me a while because I misread the instructions and did the opposite version of this. 
// Looking at the others it might have been better to use "counter" instead of "i"

function amountOfPages(summary) {
    let i = 0
    let strDig = ''

    while (i < summary) {
        i++
        strDig += String(i)
        if (strDig.length == summary) {
            return i
        }
    }
}

// Not many solutions but this was the best

function amountOfPages(summary) {
    let counter = 1;
    let string = '';

    while (string.length < summary) {
        string += counter
        counter++
    }
    return counter - 1

}