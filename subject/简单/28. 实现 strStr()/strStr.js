/*
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 96ms  37.8mb
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (needle.length > haystack.length) return -1;
  if (needle.length === haystack.length) return haystack === needle ? 0 : -1;
  let hl = haystack.length;
  let nl = needle.length;
  let index = 0;
  let k = 0;
  for (let i = 0; i < hl; i++) {
    while (needle[0] !== haystack[index] && index <= hl - nl) {
      index++;
    }
    if (index > hl - nl) {
      return -1;
    }
    for (let j = 1; j < nl; j++) {
      if (needle[j] !== haystack[j + index]) {
        // 回溯
        index = index + j;
        k = 0;
        if (hl - index < nl) {
          return -1;
        }
        break;
      } else {
        k++;
        if (k === nl) {
          return index;
        }
      }
    }
  }
  return index;
};
test();

function test() {
  console.log(strStr("mississippi", "pi") === 9);
  console.log(strStr("hel1llo", "ll") === 4);
  console.log(strStr("hello", "") === 0);
  console.log(strStr("aaaaa", "needle") === -1);
}
