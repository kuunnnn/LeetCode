import { expect } from "../../../utils/buildTree.mjs";

/**
 * @param {number[]} nums
 * @param {number} target
 * @link https://leetcode-cn.com/problems/3sum-closest/
 * @return {number}
 * 1. 循环 双指针
 * 104ms  38.5mb
 */
var threeSumClosest = function ( nums, target ) {
  nums.sort( ( a, b ) => a - b )
  let min = Number.MAX_SAFE_INTEGER;
  for ( let k = 0, len = nums.length; k < len; k++ ) {
    if ( k > 0 && nums[ k ] === nums[ k - 1 ] ) {
      continue
    }
    let l = len - 1;
    let i = k + 1;
    while ( i < l ) {
      let sum = (nums[ k ] + nums[ i ] + nums[ l ]);
      if ( sum === target ) return target
      if ( Math.abs( sum - target ) < Math.abs( min - target ) ) {
        min = sum
      }
      if ( sum > target ) {
        let l1 = l - 1
        while ( i < l1 && nums[ l1 ] === nums[ l ] ) {
          l1--
        }
        l = l1
      } else {
        let i1 = i + 1
        while ( i1 < l && nums[ i1 ] === nums[ i ] ) {
          i1++
        }
        i = i1
      }
    }
  }
  return min
};
expect( threeSumClosest( [ 0, 1, 2 ], 0 ), 3 )
expect( threeSumClosest( [ 1, 1, -1, -1, 3 ], -1 ), -1 )
expect( threeSumClosest( [ -1, 2, 1, -4 ], 1 ), 2 )
