// 72ms, 34mb
var removeElement = function (nums, val) {
  const len = nums.length;
  let num = 0,
    i = 0;
  while (i < len - num) {
    if (nums[i] === val) {
      num++;
      let temp = nums[len - num];
      nums[len - num] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }
  return len - num;
};

// 56ms, 33.7mb
var removeElement2 = function (nums, val) {
  let i = 0,
    len = nums.length;
  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1];
      len--;
    } else {
      i++;
    }
  }
  // 这里 i 和 len 会是相等的
  // i 是不同的元素个数
  // len 是去重相同的元素后的长度
  return len;
};

// 52ms 33.7mb
var removeElement3 = function (nums, val) {
  let i = 0,
    j = 0,
    len = nums.length;
  while (i < len) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
    i++;
  }
  return j;
};
