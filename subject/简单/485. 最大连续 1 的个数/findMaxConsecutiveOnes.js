import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/max-consecutive-ones/
 * @return {number}
 * 100ms 39.8mb
 */
var findMaxConsecutiveOnes = function ( nums ) {
  let length = nums.length;
  let val = 0, num = 0;
  while ( length-- ) {
    if ( nums[ length ] === 1 ) {
      num++
    } else {
      val = val > num ? val : num
      num = 0
    }
  }
  return val > num ? val : num
};

expect( findMaxConsecutiveOnes( [ 1, 1, 0, 1 ] ), 2 )
expect( findMaxConsecutiveOnes( [ 1, 1, 0, 1, 1, 1 ] ), 3 )
