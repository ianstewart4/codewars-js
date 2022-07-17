// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// My solution

function queueTime(customers, n) {
    if (customers == []) return 0
    if (n == 1) return customers.reduce((a, b) => a + b, 0)
    if (n >= customers.length) return Math.max(...customers)

    let lineTimes = customers.slice(0, n) // first customers in lines 1 through n 
    customers = customers.slice(n, customers.length)
    let freeLane

    for (let i = 0; i < customers.length; i++) {
        freeLane = lineTimes.indexOf(Math.min(...lineTimes)) // index of the next line that will be clear
        lineTimes[freeLane] += customers[i]
    }
    return Math.max(...lineTimes)
}

// Best

function queueTime(customers, n) {
    var w = new Array(n).fill(0); // [my note] I was thinking of this but couldn't recall the method to create an array with length = n of zeros. Will remember this. 
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w));
        w[idx] += t;
    }
    return Math.max(...w);
}