function findNthPerfect (n) {
  if ( n <= 0 )
    throw new Error("number must be 1 or greater")

  if ( n === 1 )
    return 19;

  if ( n === 2 )
    return 28;

  let lastNumber = 29
  let curPerfect = 0

  while ( n > 2 ) {
    let digits = lastNumber
      .toString()
      .split( '' )
      .map( ( x ) => Number( x ) )

    let sum = digits
      .reduce( ( acc, cur ) => acc + cur, 0 )

    if ( sum === 10 ) {
      curPerfect = lastNumber
      n--
    }

    lastNumber++
  }

  return curPerfect
}

module.exports = findNthPerfect
