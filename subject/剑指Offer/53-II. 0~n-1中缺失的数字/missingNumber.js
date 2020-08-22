/**
 * @param {number[]} nums
 * @return {number}
 * 二分
 * 96ms  39.2mb
 */
var missingNumber = function ( nums ) {
  if ( nums[ 0 ] !== 0 ) return 0
  let high = nums.length - 1;
  if ( nums[ high ] === high ) return high + 1
  let low = 0;
  let mid = 0;
  while ( low <= high ) {
    mid = low + Math.floor( (high - low) / 2 )
    if ( low === high ) {
      break
    }
    if ( nums[ mid ] > mid ) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
};

/**
 * @param {number[]} nums
 * @return {number}
 * 遍历判断值是否等于 index
 * 104ms 39.3mb
 */
var missingNumber2 = function ( nums ) {
  let high = nums.length;
  if ( nums[ high - 1 ] === high - 1 ) return high
  for ( let i = 0; i < high; i++ ) {
    if ( nums[ i ] !== i ) {
      return i
    }
  }
  return nums.length;
};
test( missingNumber2 )

function test( fn ) {
  console.log( fn( [ 0, 1, 3 ] ) === 2 )
  console.log( fn( [ 0, 1, 2, 4, 5, 6, 7, 8, 9 ] ) === 3 )
  console.log( fn( [ 0, 1, 2, 3, 4, 5, 6 ] ) === 7 )
}
