//76ms 35mb
var merge = function (nums1, m, nums2, n) {
  function swap(list, i, j) {
    const t = list[j];
    list[j] = list[i];
    list[i] = t;
  }

  for (let j = 0; j < n; j++) {
    nums1[m + j] = nums2[j];
  }
  for (let i = 0; i < m; i++) {
    if (nums1[i] > nums1[m]) {
      swap(nums1, i, m);
      for (let k = 0; k < n - 1; k++) {
        if (nums1[m + k] > nums1[m + k + 1]) {
          swap(nums1, m + k, m + k + 1);
        }
      }
    }
  }
};

//72ms 34mb
var merge2 = function (nums1, m, nums2, n) {
  let l = m + n - 1,
    i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[l--] = nums1[i];
      i--;
    } else {
      nums1[l--] = nums2[j];
      j--;
    }
  }
  while (j >= 0) {
    nums1[l--] = nums2[j--];
  }
};
