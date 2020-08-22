/**
 * @param {number} x
 * @return {number}
 * 牛顿迭代法 原理不会
 */
var mySqrt = function ( x ) {
  let t = x;
  let eps = 1e-12
  while ( Math.abs( t - x / t ) > eps * t ) {
    t = (t + x / t) / 2.0;
  }
  return Math.floor( t )
};

/**
 * @param {number} x
 * @return {number}
 * 二分
 */
function mySqrt2( x ) {
  if ( x <= 1 ) return x
  let left = 0;
  let right = x;
  let mid = 0;
  let result = -1;
  while ( left <= right ) {
    mid = left + Math.floor( ((right - left) / 2) )
    if ( right - left <= 1 ) {
      result = mid
      break
    }
    if ( mid * mid > x ) {
      right = mid
    } else {
      left = mid
    }
  }
  return result
}

/*
class Solution:
    def mySqrt(self, x: int) -> int:
        r = x
        while r*r > x:
            r = (r + x/r) // 2
        return int(r)
 */
function test( fn ) {
  // console.log( fn( 450 ) === Math.floor( Math.sqrt( 450 ) ) )
  // console.log( fn( 4500 ) === Math.floor( Math.sqrt( 4500 ) ) )
  console.log( fn( 8 ), Math.floor( Math.sqrt( 45000 ) ) )
}

test( mySqrt2 )
