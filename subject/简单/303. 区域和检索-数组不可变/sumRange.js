import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 */
var NumArray = function ( nums ) {
  this.nums = nums;
  this.length = nums.length
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 * 332ms 44.3mb
 */
NumArray.prototype.sumRange = function ( i, j ) {
  let result = 0;
  while ( i <= j && i < this.length ) {
    result += this.nums[ i++ ]
  }
  return result
};

/**
 * @param {number[]} nums
 * 初始化时计算缓存所有值 内存不够
 */
var NumArray2 = function ( nums ) {
  this.sum = [ 0 ]
  // 动态规划的转移方程 使用数组缓存值, sum[j] 的值=nums[j-1]+sum[j-1]
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    this.sum[ i + 1 ] = nums[ i ] + this.sum[ i ]
  }
};
/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 * 140ms 44.4mb
 */
NumArray2.prototype.sumRange = function ( i, j ) {
  return this.sum[ j + 1 ] - this.sum[ i ]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
test( NumArray2 )

function test( NumArray ) {
  const obj = new NumArray( [ -2, 0, 3, -5, 2, -1 ] )
  expect( obj.sumRange( 0, 2 ), 1 )
  expect( obj.sumRange( 2, 5 ), -1 )
  expect( obj.sumRange( 0, 5 ), -3 )
}
