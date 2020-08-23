import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @link https://leetcode-cn.com/problems/3sum/
 * 348ms 51.5mb
 * 暴力
 */
var threeSum = function (nums) {
  if (nums.length === 0 || nums.length <= 2) return [];
  nums.sort((a, b) => a - b);
  const result = [];
  const c = new Map();
  for (let k = 0, len = nums.length; k < len; k++) {
    let i = 0;
    let l = len - 1;
    while (i !== l && k !== i && k !== l) {
      let r = nums[k] + (nums[i] + nums[l]);
      if (r === 0) {
        if (!c.has(`${nums[k]}${nums[i]}${nums[l]}`)) {
          result.push([nums[k], nums[i], nums[l]]);
          c.set(`${nums[k]}${nums[i]}${nums[l]}`, true);
        }
        i++;
        l--;
      } else if (r > 0) {
        l--;
      } else {
        i++;
      }
    }
  }
  return result;
};
/**
 * @param {number[]}nums
 * @return {[]|*[]}
 * 216ms  48.4mb
 */
var threeSum2 = function (nums) {
  if (nums.length === 0 || nums.length <= 2) return [];
  nums.sort((a, b) => a - b);
  const result = [];
  for (let k = 0, len = nums.length; k < len; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }
    let target = -nums[k];
    let l = len - 1;
    for (let i = k + 1; i < l; i++) {
      if (i > k + 1 && nums[i] === nums[i - 1]) {
        continue;
      }
      while (i < l && nums[i] + nums[l] > target) {
        l--;
      }
      if (i === l) {
        break;
      }
      if (nums[i] + nums[l] === target) {
        result.push([nums[k], nums[i], nums[l]]);
      }
    }
  }
  return result;
};

expect(threeSum([]), []);
expect(threeSum([0, 0]), []);
expect(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
expect(
  threeSum2([-1, 0, 1, 2, -1, -4]).map((v) => v.sort((a, b) => a - b)),
  [
    [-1, -1, 2],
    [-1, 0, 1],
  ]
);
