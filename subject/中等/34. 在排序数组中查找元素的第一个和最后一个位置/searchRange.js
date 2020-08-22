/**
 * @param {number[]} nums
 * @param {number} target
 * @link https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
 * @return {number[]}
 * 88ms 38.9mb
 */
var searchRange = function ( nums, target ) {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;
  let result = [ -1, -1 ];
  while ( low <= high ) {
    mid = low + Math.floor( (high - low) / 2 )
    if ( nums[ mid ] === target ) {
      break;
    }
    if ( nums[ mid ] < target ) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  if ( nums[ mid ] !== target ) {
    return result
  }
  let i = mid;
  result[ 0 ] = result[ 1 ] = mid
  while ( i >= low ) {
    if ( nums[ i ] === target ) {
      result[ 0 ] = i
    } else {
      break;
    }
    i--
  }
  i = mid + 1
  while ( i <= high ) {
    if ( nums[ i ] === target ) {
      result[ 1 ] = i
    } else {
      break;
    }
    i++
  }
  return result
};

console.log( searchRange( [ 5, 7, 7, 8, 8, 10 ], 8 ).join( "," ) === "3,4" )
console.log( searchRange( [ 5, 7, 7, 8, 8, 10 ], 6 ).join( "," ) === "-1,-1" )
