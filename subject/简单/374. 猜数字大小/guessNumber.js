/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
function guess( num ) {
  return num === guess.target ? 0 : num > guess.target ? -1 : 1
}

/**
 * @link https://leetcode-cn.com/problems/guess-number-higher-or-lower/
 * @param {number} n
 * @return {number}
 * 55ms 37mb
 */
var guessNumber = function ( n ) {
  let left = 1;
  let right = n;
  let mid = 0;
  let result = 0;
  while ( left <= right ) {
    mid = Math.floor( (left + right) / 2 )
    result = guess( mid )
    if ( result === 0 ) {
      return mid
    }
    if ( result === -1 ) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }
  return -1
};




function test( fn ) {
  guess.target = 6;
  console.log( fn( 10 ) === guess.target )
  console.log( fn( 1000 ) === guess.target )
  console.log( fn( 4000 ) === guess.target )
}

test( guessNumber )
