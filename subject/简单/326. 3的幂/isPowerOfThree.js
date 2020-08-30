import { expect } from "../../../utils/test-util.mjs";

// 3的幂次的质因子只有3 --->
function isPowerOfThree1( n ) {
  return n > 0 && 1162261467 % n === 0;
}

// 3的n次幂对应的3进制数---> 1  10 100 1000 ...
function isPowerOfThree2( n ) {
  // 没有发现转 3 进账的方法
  return /^10*$/.test( toThree( n ) )

  function toThree( n ) {
    let res = ""
    while ( n > 0 ) {
      res = n % 3 + res
      n = Math.floor( n / 3 )
    }
    return res
  }
}


/**
 * @param {number} n
 * @return {boolean}
 * 280ms, 47.5mb
 */
var isPowerOfThree = function ( n ) {
  let res = 1;
  while ( res <= n ) {
    if ( res === n ) return true
    res *= 3
  }
  return false
};

test( isPowerOfThree )

function test( fn ) {
  const nums = [ 1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 14348907, 43046721, 129140163, 387420489, 1162261467 ]
  nums.forEach( e => {
    expect( fn( e ), true )
  } )
}
