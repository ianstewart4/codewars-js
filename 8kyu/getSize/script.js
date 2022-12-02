// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution

const getSize = (w, h, d) => [(w * h + w * d + h * d) * 2, w * h * d]
