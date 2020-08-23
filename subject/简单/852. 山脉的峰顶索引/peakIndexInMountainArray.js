/**
 * @param {number[]} A
 * @return {number}
 * @link https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/solution/shan-mai-shu-zu-de-feng-ding-suo-yin-by-leetcode/
 * 二分找到左山坡  即 mid < mid-1
 * 88ms  38.2mb
 */
var peakIndexInMountainArray = function (A) {
  let low = 0;
  let high = A.length - 1;
  let mid = 0;
  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    if (A[mid] > A[mid + 1] && A[mid - 1] < A[mid]) {
      return mid;
    }
    if (A[mid] > A[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return mid;
};

console.log(peakIndexInMountainArray([0, 1, 0]) === 1);
console.log(peakIndexInMountainArray([0, 2, 1, 0]) === 1);
console.log(peakIndexInMountainArray([0, 2, 3, 0]) === 2);
console.log(peakIndexInMountainArray([0, 2, 3, 4, 2, 0]) === 3);
