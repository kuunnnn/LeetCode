/**
 * @param {*} x
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

const reverse = function (x) {
  let str = Array.from(x.toString());
  const symbol = str[0] === "-" ? str.shift() : "";
  const num = str.reverse().join("");
  const result = Number(num);
  const max = 2147483647;
  return result > max ? 0 : Number(symbol + num);
};
