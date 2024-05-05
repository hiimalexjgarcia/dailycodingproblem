function isValidUTF8 (thebytes) {
  if ( thebytes.length === 0 || thebytes.length > 7 )
    throw new Error('list size invalid');

  if ( ! thebytes.every( (i) => ( i >= 0 ) && ( i < 256 ) ) )
    throw new Error('list item invalid');

  if ( thebytes.length === 1 && ( thebytes[0] & 128 ) === 0 )
    return true;

  let n = thebytes.length;
  if ( ( thebytes[0] & ( 256 - 2 ** ( 7 - n ) ) ) === ( 256 - 2 ** ( 8 - n ) )
       && thebytes.slice(1).every( (i) => ( i & 192 ) === 128 ) )
    return true;

  return false;
}

module.exports = isValidUTF8
