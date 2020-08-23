import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/contains-duplicate/
 * @return {boolean}
 * 84ms 43.1mb
 * 1. 排序 比较相邻元素       时间
 * 2. hashSet 一次遍历判断   空间
 */
var containsDuplicate = function ( nums ) {
  if ( nums.length === 0 ) return false
  const hashSet = new Set()
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    if ( hashSet.has( nums[ i ] ) ) {
      return true
    }
    hashSet.add( nums[ i ] )
  }
  return false
};


expect( containsDuplicate( [ 0, 1, 2, 3, 3, 4 ] ), true )
expect( containsDuplicate( [ 0, 1, 2, 3, 4 ] ), false )
