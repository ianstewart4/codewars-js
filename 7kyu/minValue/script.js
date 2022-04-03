// My solution
// I learned about using Set to remove duplicates. I'd like to read up on it a bit more.
// I quite like my solution. It's very concise, one line, and not too confusing

function minValue(values) {
    return Number([...new Set(values.sort())].join(''))
}

// One of the best solutions
// I've never seen methods used on multiple lines like this but it's an nicely organized way to use chained methods.

function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }