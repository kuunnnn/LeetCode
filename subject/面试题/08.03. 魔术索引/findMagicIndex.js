/**
 * @param {number[]} nums
 * @return {number}
 * 类似二分
 * 1. 判断中间值是否为目标 是的话舍弃右边
 * 2. 不是的话判断最右边并减一
 * 3. 同时判断中间值是否为负数 是舍弃左边
 * 84ms 39.2mb
 */
var findMagicIndex = function ( nums ) {
  if ( nums[ 0 ] === 0 ) return 0
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;
  let result = -1;
  while ( low < high ) {
    mid = low + Math.floor( (high - low) / 2 )
    if ( nums[ mid ] < 0 ) {
      low = mid
    }
    if ( nums[ high ] === high ) {
      result = high
    }
    high--;
    if ( nums[ mid ] === mid ) {
      result = mid;
      high = mid
    }
  }
  return result
};

/**
 * @param {number[]} nums
 * @return {number}
 * 跳跃遍历
 * 72ms 39.3mb
 */
function findMagicIndex2( nums ) {
  let i = 0;
  let l = nums.length;
  while ( i < l ) {
    if ( nums[ i ] === i ) {
      return i
    } else if ( i < nums[ i ] ) {
      i = nums[ i ]
    } else {
      i++
    }
  }
  return -1
}

function test( fn ) {
  console.log( fn( [ 0, 2, 3, 4, 5 ] ) === 0 )
  console.log( fn( [ 1, 1, 1 ] ) === 1 )
  console.log( fn( [ 1, 2, 2, 3, 4, 5, 6, 7, 8 ] ) === 2 )
  console.log( fn( [ 0, 0, 2 ] ) === 0 )
  console.log( fn( [ 1, 2, 2 ] ) === 2 )
  console.log( fn( [ -96, -87, -76, -66, -64, -57, -8, 4, 8, 27, 39, 48, 52, 62, 63, 69, 84, 85, 85, 90 ] ) === 8 )
  console.log( fn( -1, -2 )===-1 )
}

test( findMagicIndex )
