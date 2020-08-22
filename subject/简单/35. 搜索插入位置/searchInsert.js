// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 80ms  37.8mb
 * 最差情况需要循环 n-1 次
 */
var searchInsert = function ( nums, target ) {
  let i = 0;
  let j = nums.length - 1
  if ( target <= nums[ i ] ) return 0
  if ( target > nums[ j ] ) return j + 1
  if ( target === nums[ j ] ) return j
  while ( i < j ) {
    if ( nums[ i ] >= target ) {
      return i
    }
    i++
  }
  return i
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 88ms 37.5mb
 * 2分
 */
function searchInsert2( nums, target ) {
  let n = nums.length;
  let left = 0, right = n - 1, r = n, mid = 0;
  while ( left <= right ) {
    mid = left+Math.floor( ( right-left) / 2 )
    if ( nums[ mid ] >= target ) {
      r = mid;
      right = mid-1
    } else {
      left = mid+1
    }
  }
  return r
}
test(searchInsert)
function test(fn) {
  console.log( fn( [ 1, 3, 5, 6 ], 5 ) === 2 )
  console.log( fn( [ 1, 3 ], 2 ) === 1 )
  console.log( fn( [ 1, 3, 5, 6 ], 2 ) === 1 )
  console.log( fn( [ 1, 3, 5, 6 ], 7 ) === 4 )
  console.log( fn( [ 1, 3, 5, 6 ], 0 ) === 0 )
}
