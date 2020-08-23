/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @link https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 * 92ms 40.9mb
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let size = 1;
  let next = 0;
  let depth = 0;
  while (size > 0) {
    root = queue.shift();
    size--;
    if (root.left !== null) {
      queue.push(root.left);
      next++;
    }
    if (root.right != null) {
      queue.push(root.right);
      next++;
    }
    if (size === 0) {
      size = next;
      next = 0;
      depth++;
    }
  }
  return depth;
};
