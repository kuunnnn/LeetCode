/**
 * @param {number[]} numbers
 * @link https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/submissions/
 * @return {number}
 * 72ms(91.90%)  37.9mb(91.77%)
 * 改良版二分: 3种情况
 * 1. mid < high  high = mid
 * 2. mid < low   low = mid
 * 3. mid === high   high--  [3,3,3,3,1,3,3] or [3,3,1,3,3,3,3]
 */
var minArray = function ( numbers ) {
  let left = 1;
  let right = numbers.length - 1;
  let target = numbers[ 0 ];
  let mid = 0;
  while ( left <= right ) {
    mid = left + Math.floor( (right - left) / 2 )
    if ( numbers[ mid ] < target ) {
      target = numbers[ mid ];
      right = mid - 1;
    } else if ( numbers[ mid ] > target ) {
      left = mid + 1;
    } else {
      break;
    }
  }
  if ( numbers[ mid ] === target ) {
    let i = mid - 1;
    while ( i >= left ) {
      if ( numbers[ i ] <= target ) {
        target = numbers[ i ]
      } else {
        break;
      }
      i--
    }
    i = mid + 1;
    while ( i <= right ) {
      if ( numbers[ i ] < target ) {
        target = numbers[ i ]
        break;
      }
      i++
    }
  }
  return target;
};

/**
 * @param {number[]} numbers
 * @return number
 * 104ms  37.9mb
 */
function minArray2( numbers ) {
  let lo = 0;
  let hi = numbers.length - 1;
  let mi = 0;
  while ( lo <= hi ) {
    mi = lo + Math.floor( (hi - lo) / 2 )
    if ( numbers[ mi ] < numbers[ hi ] ) {
      hi = mi
    } else if ( numbers[ mi ] > numbers[ hi ] ) {
      lo = mi+1
    } else {
      hi--
    }
  }
  return numbers[ lo ]
}

test( minArray2 )

function test( fn ) {
  console.log( fn( [ 5, 4, 5, 5, 5, 5, 5 ] ) === 4 )
  console.log( fn( [ 2, 2, 2, 3, 1 ] ) === 1 )
  console.log( fn( [ 2, 2, 2, 0, 1 ] ) === 0 )
  console.log( fn( [ 3, 1, 3, 3 ] ) === 1 )
  console.log( fn( [ 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6 ] ) === 1 )
  console.log( fn( [ 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4 ] ) === 0 )
  console.log( fn( [ 3, 4, 5, 1, 2 ] ) === 1 )
  console.log( fn( [ 2, 2, 2, 0, 1 ] ) === 0 )
}
