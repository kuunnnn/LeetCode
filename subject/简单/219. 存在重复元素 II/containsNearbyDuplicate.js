import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 滑动窗口
 * 使用一个 hashSet 表示一个 k 长的窗口 hashSet 最多存在 K+1 个元素
 * 在 hashSet 长度为最大时 删除最开始的元素
 * 空间复杂度为 O(min(n,k))
 * 时间复杂度为 O(N) 最差情况会遍历一遍
 * 92ms  42mb
 */
var containsNearbyDuplicate = function ( nums, k ) {
  if ( nums.length === 0 || k === 0 ) return false
  const hashSet = new Set()
  for ( let i = 0, high = nums.length; i < high; i++ ) {
    if ( i > k ) {
      hashSet.delete( nums[ i - k - 1 ] )
    }
    if ( hashSet.has( nums[ i ] ) ) {
      return true
    }
    hashSet.add( nums[ i ] )
  }
  return false
};
expect( containsNearbyDuplicate( [ 4, 1, 2, 3, 1, 5 ], 3 ), true )
expect( containsNearbyDuplicate( [ 1, 2, 3, 1 ], 3 ), true )
expect( containsNearbyDuplicate( [ 1, 2, 3, 1 ], 0 ), false )
expect( containsNearbyDuplicate( [ 1, 0, 1, 1 ], 1 ), true )
expect( containsNearbyDuplicate( [ 1, 2, 3, 1, 2, 3 ], 2 ), false )


