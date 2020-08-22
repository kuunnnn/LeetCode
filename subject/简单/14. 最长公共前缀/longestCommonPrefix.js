/**
 编写一个函数来查找字符串数组中的最长公共前缀。
 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"

 */
/**
 * 1. 横向比较
 * 2. 纵向比较
 * 3. 排序后比较前后 (很巧妙 性能可能不会好)
 */
/**
 * @param {string[]} strs
 * @return {string}
 * 横向比较 100ms 39.1ms
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let tmp = strs[0];
  let k = tmp.length;
  for (let i = 1, len = strs.length; i < len; i++) {
    for (let j = 0; j < k; j++) {
      if (tmp[j] !== strs[i][j]) {
        k = j;
        if (k === 0) {
          return "";
        }
      }
    }
  }
  return tmp.substring(0, k);
};
// 纵向比较 96ms 39.1mb
var longestCommonPrefix2 = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let i = 0,
    l = strs[0].length,
    k = strs.length,
    b = "";
  while (i < l) {
    b = strs[0][i];
    for (let j = 0; j < k; j++) {
      if (strs[j][i] !== b) {
        return strs[0].substring(0, i);
      }
    }
    i++;
  }
  return strs[0];
};

test();

function test() {
  console.log(longestCommonPrefix2(["flower", "flow", "flight"]) === "fl");
  console.log(longestCommonPrefix2(["dog", "racecar", "car"]) === "");
}
