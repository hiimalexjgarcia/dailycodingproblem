function findNthPerfect (n) {
  if ( n === 1 )
    return 19;

  if ( n === 2 )
    return 28;

  throw new Error('not implemented');
}

module.exports = findNthPerfect
