/**
 * @param {number[]} nums
 * @param {number} target
 * @link https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * @return {number}
 * 96ms  38.9mb
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;
  let result = 0;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      break;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  let i = mid;
  while (i >= low) {
    if (nums[i] === target) {
      result++;
    } else {
      break;
    }
    i--;
  }
  i = mid + 1;
  while (i <= high) {
    if (nums[i] === target) {
      result++;
    } else {
      break;
    }
    i++;
  }
  return result;
};

console.log(search([5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 10], 8) === 7);
console.log(search([1, 2, 3], 1) === 1);
