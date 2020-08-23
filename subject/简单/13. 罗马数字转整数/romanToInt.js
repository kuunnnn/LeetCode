/**
 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

 字符          数值
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

 I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

 */
/**
 * @param {string} s
 * @link https://leetcode-cn.com/problems/roman-to-integer/
 * @return {number}
 * 204ms 42.7mb
 */
var romanToInt = function (s) {
  if (s === "") return 0;
  let result = 0,
    i = 0,
    size = s.length;
  while (i < size) {
    switch (s[i]) {
      case "M":
        result += 1000;
        break;
      case "D":
        result += 500;
        break;
      case "C":
        result += 100;
        if (i !== size - 1) {
          if (s[i + 1] === "D") {
            result += 300;
            i++;
          } else if (s[i + 1] === "M") {
            result += 800;
            i++;
          }
        }
        break;
      case "L":
        result += 50;
        break;
      case "X":
        result += 10;
        if (i !== size - 1) {
          if (s[i + 1] === "L") {
            result += 30;
            i++;
          } else if (s[i + 1] === "C") {
            result += 80;
            i++;
          }
        }
        break;
      case "V":
        result += 5;
        break;
      case "I":
        result += 1;
        if (i !== size - 1) {
          if (s[i + 1] === "V") {
            result += 3;
            i++;
          } else if (s[i + 1] === "X") {
            result += 8;
            i++;
          }
        }
        break;
      default:
        throw TypeError("unknown character!");
    }
    i++;
  }
  return result;
};

// 和上面思路一致, 略作封装 184ms 43.7mb
var romanToInt2 = function (s) {
  if (s === "") return 0;
  let result = 0,
    i = 0,
    size = s.length;
  const r = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const r1 = {
    V: 3,
    X: 8,
    L: 30,
    C: 80,
    D: 300,
    M: 800,
  };
  let slow = 0;

  function match(a, b) {
    if (slow + 1 !== size) {
      if (s[slow + 1] === a || s[slow + 1] === b) {
        result += r1[s[slow + 1]];
        slow++;
      }
    }
  }

  while (slow < size) {
    result += r[s[slow]];
    if (s[slow] === "I") {
      match("V", "X");
    } else if (s[slow] === "X") {
      match("L", "C");
    } else if (s[slow] === "C") {
      match("D", "M");
    }
    slow++;
  }
  return result;
};

// 一种巧妙的方式
// 180ms 43.2mb
var romanToInt3 = function (s) {
  if (s === "") return 0;
  let result = 0,
    i = 0,
    size = s.length;
  const a = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  while (i < size) {
    if (i < size - 1 && a[s[i]] < a[s[i + 1]]) {
      result -= a[s[i]];
    } else {
      result += a[s[i]];
    }
    i++;
  }
  return result;
};

function test(fn) {
  console.log(fn("III") === 3);
  console.log(fn("IV") === 4);
  console.log(fn("CD") === 400);
}

test(romanToInt3);
