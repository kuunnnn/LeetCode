/**
 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

 示例 1:

 输入: [2,2,1]
 输出: 1

 示例 2:
 输入: [4,1,2,1,2]
 输出: 4
 */
/**
 * @link [](https://leetcode-cn.com/problems/single-number/)
 * @param {number[]} nums
 * @return {number}
 * @description
 *  1. 任何数和 00 做异或运算，结果仍然是原来的数，即  a^0=a
    2. 任何数和其自身做异或运算，结果是 00，即 a^a=0
    3. 异或运算满足交换律和结合律，a ^ b ^ c <=> a ^ c ^ b
 * 88ms 38.7mb
 */
var singleNumber = function (nums) {
  if (nums.length === 0) return 0;
  let result = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    result ^= nums[i];
  }
  return result;
};

function test(fn) {
  console.log(fn([]) === 0);
  console.log(fn([2, 2, 1]) === 1);
  console.log(fn([4, 1, 2, 1, 2]) === 4);
}

test(singleNumber);
