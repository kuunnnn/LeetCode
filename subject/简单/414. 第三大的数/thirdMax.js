import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/third-maximum-number/
 * @return {number}
 * 71ms 38.1mb
 * 需要注意负数
 */
var thirdMax = function ( nums ) {
  let one = Number.MIN_SAFE_INTEGER;
  let two = Number.MIN_SAFE_INTEGER;
  let val = 0;
  let three = Number.MIN_SAFE_INTEGER;
  let length = nums.length;
  while ( length-- ) {
    val = nums[ length ]
    if ( val > one ) {
      three = two
      two = one
      one = val
      continue
    }
    if ( val < one && val > two ) {
      three = two;
      two = val;
      continue
    }
    if ( val < two && val > three ) {
      three = val
    }
  }
  return three !== Number.MIN_SAFE_INTEGER ? three : one
};

expect( thirdMax( [ 3, 2, 1 ] ), 1 )
expect( thirdMax( [ 2, 1 ] ), 2 )
expect( thirdMax( [ 2, 2, 3, 1 ] ), 1 )
expect( thirdMax( [ 1, 2, 2, 5, 3, 5 ] ), 2 )
expect( thirdMax( [ 1, 2, -232434234 ] ), -232434234 )
expect( thirdMax( [ 1, -232434234 ] ), 1 )
