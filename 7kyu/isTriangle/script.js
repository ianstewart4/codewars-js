// My solution
// I figured if one of the sides is greater than the sum of the other two, it's not a triangle.
// I'm pretty sure there is a more efficient way to do this but I'm okay with the result.

function isTriangle(a, b, c) {
    let numArr = [a, b, c]
    if (Math.max(...numArr) >= numArr.reduce((a, b) => a + b, 0) - Math.max(...numArr)) {
        return false
    }
    return true
}

// Best solution
// This one seems weirdly verbose despite being shorter but it's really simple and I like it.

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}