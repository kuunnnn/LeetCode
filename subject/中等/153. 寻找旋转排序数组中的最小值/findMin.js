/**
 * @param {number[]} nums
 * @return {number}
 * 96ms  38mb
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;
  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < nums[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return nums[low];
};

function test(fn) {
  console.log(fn([4, 5, 6, 7, 0, 1, 2]));
}

test(findMin);
