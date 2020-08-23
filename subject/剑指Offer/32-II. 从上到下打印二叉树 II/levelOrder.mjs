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
 * 广度优先遍历
 * 100ms 39.4mb
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [[root]];
  const result = [];
  let nextLevel = [];
  let currentLevel = [];
  let currentValue = [];
  while (queue.length !== 0) {
    nextLevel = [];
    currentValue = [];
    currentLevel = queue.shift();
    if (currentLevel.length === 0) {
      break;
    }
    for (let node of currentLevel) {
      currentValue.push(node.val);
      if (node.left !== null) nextLevel.push(node.left);
      if (node.right !== null) nextLevel.push(node.right);
    }
    result.push(currentValue);
    queue.push(nextLevel);
  }
  return result;
};

expect(levelOrder(buildTree([3, 9, 20, null, null, 15, 7])), [
  [3],
  [9, 20],
  [15, 7],
]);
