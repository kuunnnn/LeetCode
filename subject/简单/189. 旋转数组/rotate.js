import { expect } from "../../../utils/test-util.mjs";

/**
 * 方法:
 * 1. 暴力循环
 * 2. 环交换
 * 3. 反转
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @link https://leetcode-cn.com/problems/rotate-array/
 * @return {void} Do not return anything, modify nums in-place instead.
 * 296ms  38.4mb
 * 数组整体向后移动 k%nums.length 次
 */
var rotate = function ( nums, k ) {
  let size = nums.length;
  k = k % size;
  if ( k === 0 ) return
  let previous = 0;
  let temp = 0;
  for ( let i = 0; i < k; i++ ) {
    previous = nums[ size - 1 ]
    for ( let j = 0; j < size; j++ ) {
      temp = nums[ j ]
      nums[ j ] = previous
      previous = temp
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 环替换  92ms  38.9mb
 */
var rotate2 = function ( nums, k ) {
  let size = nums.length;
  let siz1 = size;
  k %= size;
  for ( let i = 0; i < size && k !== 0; i += k, siz1 -= k, k %= siz1 ) {
    for ( let j = 0; j < k; j++ ) {
      const temp = nums[ i + j ]
      nums[ i + j ] = nums[  size - k + j ]
      nums[  size - k + j ] = temp
    }
  }
};



test( rotate2 )

function wrapper( fn, nums, k ) {
  let arr = nums;
  fn( nums, k );
  return arr;
}

function test( fun ) {
  expect( wrapper( fun, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 3 ), [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ] )
  expect( wrapper( fun, [ 1, 2, 3 ], 3 ), [ 1, 2, 3 ] )
  expect( wrapper( fun, [ 1, 2, 3 ], 2 ), [ 2, 3, 1 ] )
  expect( wrapper( fun, [ 1, 2, 3 ], 4 ), [ 3, 1, 2 ] )
  expect( wrapper( fun, [ 1, 2, 3, 4, 5, 6, 7 ], 3 ), [ 5, 6, 7, 1, 2, 3, 4 ] )
  expect( wrapper( fun, [ 1, 2, 3, 4, 5, 6, 7 ], 2 ), [ 6, 7, 1, 2, 3, 4, 5 ] )
}
