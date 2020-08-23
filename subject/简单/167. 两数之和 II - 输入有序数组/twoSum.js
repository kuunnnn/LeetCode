/**
 * @param {number[]} numbers
 * @param {number} target
 * @link https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @return {number[]}
 * 76ms  37.7mb
 * 二分找到和目标值接近的数字, 前后指针逼近
 */
var twoSum = function (numbers, target) {
  if (numbers.length === 2) return [1, 2];
  let left = 0;
  let right = numbers.length - 1;
  let mid = 0;
  let result = [];
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (numbers[mid] > target) {
      right = mid;
    } else {
      break;
    }
  }
  while (left < right) {
    mid = numbers[left] + numbers[right];
    if (mid === target) {
      result = [left + 1, right + 1];
      break;
    }
    if (mid > target) {
      right--;
    } else {
      left++;
    }
  }
  return result;
};

function test(fn) {
  console.log(fn([2, 7, 11, 15, 34, 67, 90, 111, 222, 444], 9));
}

test(twoSum);
