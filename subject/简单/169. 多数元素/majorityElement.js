/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/majority-element/
 * 100ms 40.3mb
 */
var majorityElement = function ( nums ) {
  const hash = new Map()
  for ( let n of nums ) {
    hash.set( n, hash.has( n ) ? hash.get( n ) + 1 : 1 )
  }
  let max = [ 0, Number.MIN_SAFE_INTEGER ];
  for ( let [ key, value ] of hash.entries() ) {
    if ( value > max[ 1 ] ) {
      max[ 0 ] = key
      max[ 1 ] = value
    }
  }
  return max[ 0 ]
};
// 108ms 40.5mb
var majorityElement2 = function ( nums ) {
  nums.sort( ( a, b ) => a - b )
  let num = Number.MIN_SAFE_INTEGER;
  let length = nums.length;
  let val = nums[ 0 ];
  let i = 0, j = 1;
  for ( ; j < length; j++ ) {
    if ( nums[ i ] !== nums[ j ] ) {
      if ( num < j - i ) {
        num = j - i
        val = nums[ i ]
      }
      i = j
    }
  }
  return num < j - i ? nums[ i ] : val
};
var majorityElement3 = function ( nums ) {
  nums.sort( ( a, b ) => a - b )
  return nums[ Math.floor( nums.length / 2 ) ]
};
// Boyer-Moore 算法
var majorityElement4 = function ( nums ) {
  let count = 0;
  let candidate = null;
  for ( let num of nums ) {
    if ( count === 0 ) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
};
console.log( majorityElement3( [ 3, 2, 3 ] ) )
console.log( majorityElement3( [ 3, 3, 4 ] ) )
console.log( majorityElement3( [ 2, 2, 1, 1, 1, 2, 2 ] ) )
