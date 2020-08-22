// [](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
// 68ms  37.1MB
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let list = [root],
    temp = [],
    i = 0;
  while (list.length !== 0) {
    for (let item of list) {
      if (item.left !== null) {
        temp.push(item.left);
      }
      if (item.right !== null) {
        temp.push(item.right);
      }
    }
    list = temp;
    temp = [];
    i++;
  }
  return i;
};
