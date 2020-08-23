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
 * @return {string[][]}
 * @link https://leetcode-cn.com/problems/print-binary-tree/
 * 80ms  38.3mb
 * 想办法计算出最底层的宽度递归一遍
 * 1. 宽度可以层级计算出来
 * 2. 初始化 output 为二维"" 矩阵
 * 3. 递归计算节点 val 的 index 填充
 */
var printTree = function (root) {
  if (!root) return [];
  const result = [[]];
  const queue = [root];
  let depth = 0;
  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  let width = 1;
  for (let i = 1; i < depth; i++) {
    result[i] = [];
    width = width * 2 + 1;
  }
  for (let level of result) {
    level.length = width;
    level.fill("");
  }
  function dfs(root, level, low, high) {
    if (root === null) return;
    const mid = low + Math.floor((high - low) / 2);
    result[level][mid] = root.val.toString();
    dfs(root.left, level + 1, low, mid - 1);
    dfs(root.right, level + 1, mid + 1, high);
  }

  dfs(root, 0, 0, width);
  return result;
};

expect(printTree(buildTree([10, 5, 15, null, null, 6, 20])), [
  ["", "", "", "10", "", "", ""],
  ["", "5", "", "", "", "15", ""],
  ["", "", "", "", "6", "", "20"],
]);
expect(printTree(buildTree([1, 2, null])), [
  ["", "1", ""],
  ["2", "", ""],
]);
expect(printTree(buildTree([1, 2, 3, null, 4])), [
  ["", "", "", "1", "", "", ""],
  ["", "2", "", "", "", "3", ""],
  ["", "", "4", "", "", "", ""],
]);
expect(printTree(buildTree([1, 2, 5, 3, null, null, null, 4, null])), [
  ["", "", "", "", "", "", "", "1", "", "", "", "", "", "", ""],
  ["", "", "", "2", "", "", "", "", "", "", "", "5", "", "", ""],
  ["", "3", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["4", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
]);
