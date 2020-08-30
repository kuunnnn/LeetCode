import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number} num
 * @return {number}
 * @link https://leetcode-cn.com/problems/add-digits/
 * 120ms 39.6mb
 */
var addDigits = function ( num ) {
  if ( num < 10 ) return num
  let nextNum = 0
  while ( num > 0 ) {
    nextNum += num % 10
    num = Math.floor( num / 10 )
  }
  return nextNum < 10 ? nextNum : addDigits( nextNum )
};

// 时间复杂度为O(1)的解法
// https://leetcode-cn.com/problems/add-digits/solution/java-o1jie-fa-de-ge-ren-li-jie-by-liveforexperienc/
// x*100+y*10+z=x*99+y*9+x+y+z
function addDigits1( num ) {
  return (num - 1) % 9 + 1;
}

test( addDigits1 )

function test( func ) {
  expect( func( 38 ), 2 )
  expect( func( 1111128 ), 6 )
}
