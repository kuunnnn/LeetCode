// [102. 二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
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
 * 84ms 39.3mb
 */
function levelOrder(root) {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  let level = 0;
  let size = 1;
  let i = 0;
  while (queue.length !== 0) {
    result[level] = [];
    while (i < size) {
      const node = queue.shift();
      result[level].push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      i++;
    }
    i = 0;
    size = queue.length;
    level++;
  }
  return result;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 68ms 34.8mb
 */
var levelOrder = function (root) {
  if (!root) return [];
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
    result[level].push(node.val);
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
      result.push([]);
    }
  }
  result.pop();
  return result;
};
