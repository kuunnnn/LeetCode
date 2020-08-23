/**
 * @function 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @link https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @return {number[]}
 * @desc  1. 双 set 遍历一遍
 * 80ms  38.4mb
 */
var intersection = function (nums1, nums2) {
  const list = new Set();
  const result = new Set();
  for (let i = 0, len = nums1.length; i < len; i++) {
    list.add(nums1[i]);
  }
  for (let i = 0, len = nums2.length; i < len; i++) {
    if (list.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return Array.from(result.values());
};

test(intersection);

function test(fn) {
  console.log(fn([1, 2, 2, 1], [2, 2]).join(",") === "2");
  console.log(fn([4, 9, 5], [9, 4, 9, 8, 4]).join(",") === "9,4");
}
