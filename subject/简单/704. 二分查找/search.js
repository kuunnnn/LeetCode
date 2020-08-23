/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 112ms 40.6mb
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

function test(fn) {
  console.log(fn([-1, 0, 3, 5, 9, 12], 9) === 4);
  console.log(fn([-1, 0, 3, 5, 9, 12], 2) === -1);
}

test(search);
