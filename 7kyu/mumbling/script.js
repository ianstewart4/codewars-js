
// MUMBLING
// My solution
// I found this one unusually difficult. I think due to my lack of familiarity with forEach - topic to focus on

function accum(s) {
    let mumble = []
    s.split('').forEach((element, index) => mumble[index] = `${element.toUpperCase()}${element.toLowerCase().repeat(index)}`)
    return mumble.join('-')
}

// My own solution refactored and using map instead. I hadn't realized map can also return the index parameter

function accum(s) {
    return s.split('').map((element, index) => `${element.toUpperCase()}${element.toLowerCase().repeat(index)}`).join('-')
}

// Best - essentially the same as mine 😎

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }