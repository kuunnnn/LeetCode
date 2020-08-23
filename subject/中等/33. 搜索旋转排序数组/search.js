import { isEquals } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 76ms  38mb
 * 思路想办法让 lo hi 变成有序的 在对 lo hi 进行查找
 * 1.   比较 nums[hi] 是否小于 target 则 target 在左边
 * 1.1. 判断 nums[mi] < target 则 mi 左边 可以舍弃  否则无法判断 hi--
 * 2.   如果 nums[hi] > target
 * 2.1  判断 nums[mi] < target 则表示 target 在 mid 右边 li=mi 否则 lo++
 * 3.   单 nums[lo] < nums[hi] 内部有序 直接二分
 */
var search = function ( nums, target ) {
  if ( nums.length === 0 ) return -1
  let lo = 0;
  let hi = nums.length - 1;
  let mi = 0;
  while ( lo <= hi ) {
    mi = lo + Math.floor( (hi - lo) / 2 )
    if ( nums[ mi ] === target ) {
      return mi
    }
    if ( nums[ lo ] < nums[ hi ] ) {
      if ( nums[ mi ] < target ) {
        lo = mi + 1
      } else {
        hi = mi - 1
      }
      continue
    }
    if ( target > nums[ hi ] ) {
      if ( target > nums[ mi ] ) {
        hi -= 1
      } else {
        hi = mi - 1
      }
    } else {
      if ( target > nums[ mi ] ) {
        lo = mi
      } else {
        lo++
      }
    }
  }
  return -1
};

/**
 * @param nums
 * @param target
 * @return {number}
 * 84ms 37.9mb
 * 1.  判断 二分的左边是否有序
 * 1.1 判断 target 是否在内
 * 2.  表示右边有序
 * 2.1 判断 target 是否在内
 */
var search2 = function ( nums, target ) {
  if ( nums.length === 0 ) return -1
  let l = 0;
  let r = nums.length - 1;
  let m = 0;
  while ( l <= r ) {
    m = l + Math.floor( (r - l) / 2 )
    if ( nums[ m ] === target ) return m
    if ( nums[ l ] < nums[ m ] ) {
      if ( nums[ l ] <= target && nums[ m ] > target ) {
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      if ( nums[ m ] < target && nums[ r ] >= target ) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
};

test(search2)
function test( fn ) {
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 0 ), 4 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 3 ), 7 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 2 ), 6 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 4 ), 0 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 5 ), 1 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 6 ), 2 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 7 ), 3 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], -1 ), -1 )
  isEquals( fn( [ 4, 5, 6, 7, 0, 1, 2, 3 ], 8 ), -1 )
  isEquals( fn( [ 4, 5, 6, 7, 2 ], 2 ), 4 )
  isEquals( fn( [ 4, 5, 6, 7, 2 ], 5 ), 1 )
  isEquals( fn( [ 7, 0, 1, 2, 3 ], 2 ), 3 )
  isEquals( fn( [ 7, 0, 1, 2, 3 ], 7 ), 0 )
}
