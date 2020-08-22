/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  const list = [root];
  const result = [[]];
  // 下一层有多少节点
  let nextLevelSize = 0,
    // 这一层还剩节点
    curLevelSize = 1;
  let level = 0;
  while (list.length !== 0) {
    const node = list.shift();
    curLevelSize--;
    result[0].push(node.val);
    if (node.left !== null) {
      nextLevelSize++;
      list.push(node.left);
    }
    if (node.right !== null) {
      nextLevelSize++;
      list.push(node.right);
    }
    if (curLevelSize === 0) {
      curLevelSize = nextLevelSize;
      nextLevelSize = 0;
      level++;
      result.unshift([]);
    }
  }
  result.shift();
  return result;
};
