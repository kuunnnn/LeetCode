import { buildTree, expect } from "../../../utils/test-util.mjs";
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
 * 80ms 39.2mb
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let level = 0;
  let size = 1;
  let num = size;
  while (size > 0) {
    num = size;
    size = 0;
    result[level] = [];
    for (let i = 0; i < num; i++) {
      root = queue.shift();
      if (level % 2 === 0) {
        result[level].push(root.val);
      } else {
        result[level].unshift(root.val);
      }
      if (root.left) {
        queue.push(root.left);
        size++;
      }
      if (root.right) {
        queue.push(root.right);
        size++;
      }
    }
    level++;
  }
  return result;
};
expect(levelOrder(buildTree([3, 9, 20, null, null, 15, 7])), [
  [3],
  [20, 9],
  [15, 7],
]);
