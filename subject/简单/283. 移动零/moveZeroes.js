import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/move-zeroes/
 * @return {void} Do not return anything, modify nums in-place instead.
 * 88ms  39.8mb   时间 O(n) 空间 O(1)
 * 快慢指针  k,i
 * i移动到 0 位置
 * k移动到下一个非 0 位置
 * 如果 i!==k 表示中间有 0 i=k k=0
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) return;
  let high = nums.length - 1;
  let i = 0,
    k = 0;
  while (nums[i] !== 0 && i < high) {
    i++;
    k++;
  }
  while (i < high && k < high) {
    while (nums[k] === 0 && k < high) {
      k++;
    }
    if (k > i) {
      nums[i] = nums[k];
      nums[k] = 0;
    }
    i += 1;
  }
};

/**
 * 快慢指针 2
 * @param {number[]} nums
 */
function moveZeroes2(nums) {
  if (nums.length === 0) return;
  const size = nums.length;
  let k = 0;
  for (let i = 0; i < size; i++) {
    if (nums[i] !== 0) {
      nums[k++] = nums[i];
    }
  }
  for (; k < size; k++) {
    nums[k] = 0;
  }
}

/**
 * 快慢指针 2
 * @param {number[]} nums
 */
function moveZeroes3(nums) {
  if (nums.length === 0) return;
  for (let i = 0, k = 0, size = nums.length; i < size; i++) {
    if (nums[i] !== 0) {
      const temp = nums[k];
      nums[k++] = nums[i];
      nums[i] = temp;
    }
  }
}

test(moveZeroes3);

function test(fn) {
  let array = [1, 2, 3, 4];
  fn(array);
  expect(array, [1, 2, 3, 4]);
  array = [1, 2, 3, 4, 0, 0, 0];
  fn(array);
  expect(array, [1, 2, 3, 4, 0, 0, 0]);
  array = [5, 6, 0, 0, 0, 1, 2, 3];
  fn(array);
  expect(array, [5, 6, 1, 2, 3, 0, 0, 0]);
  array = [0, 0, 0, 1, 1, 1, 2];
  fn(array);
  expect(array, [1, 1, 1, 2, 0, 0, 0]);
  array = [0, 0, 0, 1, 1, 1, 0, 0, 0];
  fn(array);
  expect(array, [1, 1, 1, 0, 0, 0, 0, 0, 0]);
}
