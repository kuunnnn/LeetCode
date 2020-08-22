/**
 * TODO 时间复杂度不符合, 需要再想想
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0,
    j = 0,
    l1 = nums1.length,
    l2 = nums2.length,
    array = [];

  while (i < l1 && j < l2) {
    if (nums1[i] <= nums2[j]) {
      array.push(nums1[i]);
      i++;
    }
    if (nums1[i] > nums2[j]) {
      array.push(nums2[j]);
      j++;
    }
  }
  while (i < l1) {
    array.push(nums1[i]);
    i++;
  }
  while (j < l2) {
    array.push(nums2[j]);
    j++;
  }
  const allSize = l1 + l2;
  if (allSize % 2 === 0) {
    const mid = allSize / 2;
    return ((array[mid - 1] + array[mid]) / 2).toFixed(1);
  }
  return array[Math.floor(allSize / 2)].toFixed(1);
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
