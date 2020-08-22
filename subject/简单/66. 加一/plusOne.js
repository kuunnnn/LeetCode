/**
 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 你可以假设除了整数 0 之外，这个整数不会以零开头。

 示例 1:
 输入: [1,2,3]
 输出: [1,2,4]
 解释: 输入数组表示数字 123。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 * 92ms 37.7mb
 */
var plusOne = function (digits) {
  if (digits.length === 0) return digits;
  let l = digits.length - 1,
    n = 1;
  while (l >= 0) {
    if (digits[l] !== 9) {
      digits[l]++;
      return digits;
    }
    digits[l] = 0;
    l--;
  }
  digits.unshift(1);
  return digits;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 * 84ms 37.5mb
 */
function plusOne2(digits) {
  if (digits.length === 0) return digits;
  let l = digits.length - 1,
    n = 1;
  while (l >= 0) {
    if (digits[l] + n === 10) {
      digits[l] = 0;
      n = 1;
    } else {
      digits[l] += n;
      n = 0;
      break;
    }
    l--;
  }
  if (n === 1) {
    digits.unshift(1);
  }
  return digits;
}

function test() {
  console.log("1,2,4", plusOne([1, 2, 4]).join("") === "125");
  console.log("null", plusOne([]).join("") === "");
  console.log("0", plusOne([0]).join("") === "1");
  console.log(plusOne([9]));
  console.log("9", plusOne([9]).join("") === "10");
  console.log("1,2,9", plusOne([1, 2, 9]).join("") === "130");
  console.log("9,9,9", plusOne([9, 9, 9]).join("") === "1000");
}

test();











