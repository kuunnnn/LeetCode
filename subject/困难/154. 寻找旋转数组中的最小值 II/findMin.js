/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * @return {number}
 * @desc 剑指 Offer 11 题一致
 * 96ms  37.5mb
 */
function findMin( nums ) {
  let lo = 0;
  let hi = nums.length - 1;
  let mi = 0;
  while ( lo <= hi ) {
    mi = lo + Math.floor( (hi - lo) / 2 )
    if ( nums[ mi ] < nums[ hi ] ) {
      hi = mi
    } else if ( nums[ mi ] > nums[ hi ] ) {
      lo = mi+1
    } else {
      hi--
    }
  }
  return nums[ lo ]
}
test( findMin )

function test( fn ) {
  console.log( fn( [ 5, 4, 5, 5, 5, 5, 5 ] ) === 4 )
  console.log( fn( [ 2, 2, 2, 3, 1 ] ) === 1 )
  console.log( fn( [ 2, 2, 2, 0, 1 ] ) === 0 )
  console.log( fn( [ 3, 1, 3, 3 ] ) === 1 )
  console.log( fn( [ 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6 ] ) === 1 )
  console.log( fn( [ 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4 ] ) === 0 )
  console.log( fn( [ 3, 4, 5, 1, 2 ] ) === 1 )
  console.log( fn( [ 2, 2, 2, 0, 1 ] ) === 0 )
}
