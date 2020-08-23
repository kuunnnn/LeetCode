import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number} num
 * @return {string}
 * @link https://leetcode-cn.com/problems/integer-to-roman/
 * 贪心算法?
 * 164ms 42.7mb
 */
var intToRoman = function ( num ) {
  let result = ""
  const val = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  const str = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ]
  for ( let i = 0; i < 13 && num > 0; i++ ) {
    if ( num > val[ i ] ) {
      let j = Math.floor( num / val[ i ] );
      while ( j > 0 ) {
        result += str[ i ]
        j--
      }
      num = num % val[ i ]
    }
    if ( num === val[ i ] ) {
      result += str[ i ]
      num -= val[ i ]
    }
  }
  return result
};
/**
 * @param {number} num
 * @return {string}
 * @link https://leetcode-cn.com/problems/integer-to-roman/
 * 优化版
 * 168ms 42.7mb
 */
var intToRoman2 = function ( num ) {
  let result = ""
  const val = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  const str = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ]
  for ( let i = 0; i < 13 && num > 0; i++ ) {
    while ( num >= val[ i ] ) {
      result += str[ i ]
      num -= val[ i ]
    }
  }
  return result
};

test( intToRoman2 )

function test( fn ) {
  expect( fn( 400 ), "CD" )
  expect( fn( 3400 ), "MMMCD" )
  expect( fn( 3994 ), "MMMCMXCIV" )
  expect( fn( 3500 ), "MMMD" )
  expect( fn( 20 ), "XX" )
  expect( fn( 3 ), "III" )
  expect( fn( 3000 ), "MMM" )
}
