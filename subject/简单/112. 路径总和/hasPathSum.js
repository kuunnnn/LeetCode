import { buildTree } from "../../../utils/test-util.mjs";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * 92ms 40.8mb
 * 方法 2: 使用深度优先 or 广度优先  使用两个 stack or queue 分别存储 val 和 node 在叶子节点 判断 val+[]===sum
 */
var hasPathSum = function ( root, sum ) {
  if ( !root ) return false
  sum = sum - root.val
  if ( root.left === null && root.right === null ) return sum === 0
  return hasPathSum( root.left, sum ) || hasPathSum( root.right, sum )
};

const t = buildTree( [ 5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1 ] )
