/**
 * @param {string} s
 * @link https://leetcode-cn.com/problems/valid-parentheses/
 * @return {boolean}
 * @description 使用栈结构  遇到的第一个 right 括号的左边必定位于栈顶\
 * 92ms 38.8mb
 */
var isValid = function (s) {
  if (s === "") return true;
  let stack = [];
  let i = 0;
  let l = s.length;
  while (i < l) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      const left = stack.pop();
      if (left !== "(" && s[i] === ")") {
        return false;
      }
      if (left !== "[" && s[i] === "]") {
        return false;
      }
      if (left !== "{" && s[i] === "}") {
        return false;
      }
    }
    i++;
  }
  return stack.length === 0;
};

/***
// 新建 stack 比较
class Solution {
    public boolean isValid(String s) {
        Stack<Character>stack = new Stack<Character>();
        for(char c: s.toCharArray()){
            if(c=='(')stack.push(')');
            else if(c=='[')stack.push(']');
            else if(c=='{')stack.push('}');
            else if(stack.isEmpty()||c!=stack.pop())return false;
        }
        return stack.isEmpty();
    }
}
 */

function test(fn) {
  console.log(fn("") === true);
  console.log(fn("[") === true);
  console.log(fn("{}") === true);
  console.log(fn("[]") === true);
  console.log(fn("()") === true);
  console.log(fn("((((([])))))") === true);
  console.log(fn("(]") === false);
  console.log(fn("()[{}]") === true);
  console.log(fn("([)]") === false);
  console.log(fn("(([]{})[]{})") === true);
  console.log(fn("([{}])") === true);
  console.log(fn("()[]{}") === true);
}

test(isValid);
