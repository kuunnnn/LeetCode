/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /**
   * 1. 判断边界, 0~9 true  小于 0 false
   * 2. 将每一位的值取出到数组中
   * 3. 双指针前后判断
   */
  if (x < 0) {
    return false;
  }
  if (x >= 0 && x < 10) {
    return true;
  }
  const nums = [];
  let i = 0,
    v = 0;
  while (true) {
    v = x / Math.pow(10, i);
    if (v > 0 && v < 1) {
      break;
    }
    nums.push(Math.floor(v) % 10);
    i++;
  }
  let s = 0,
    e = nums.length - 1;
  while (s < e) {
    if (nums[s++] !== nums[e--]) {
      return false;
    }
  }
  return true;
};

// 反转 1 半数字 然后比较
var isPalindrome2 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  if (x >= 0 && x < 10) {
    return true;
  }
  let i = x,
    j = 0;
  while (i > j) {
    j = j * 10 + (i % 10);
    i = Math.floor(i / 10);
  }
  // 判断 x 位数是单数
  return i === j || i === Math.floor(j / 10);
};
