/**
 * @param {number[]} nums
 * @return {number}
 * 76ms 36.8mb
 */
var removeDuplicates = function (nums) {
  let i = 0,
    j = 1,
    len = nums.length;
  if (len === 0) {
    return 0;
  }
  while (j < len) {
    if (nums[i] !== nums[j]) {
      i++;
      if (j - i > 0) {
        nums[i] = nums[j];
      }
    }
    j++;
  }
  return i + 1;
};
