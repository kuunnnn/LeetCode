import { buildTree, expect } from "../../../utils/buildTree.mjs";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @link https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @return {number[]}
 * 递归改循环都是 使用栈或者队列
 * 72ms  37.9mb
 */
var preorderTraversal = function ( root ) {
  if ( !root ) return []
  const stack = [ root ];
  const result = [];
  while ( stack.length !== 0 ) {
    const node = stack.pop();
    result.push( node.val )
    if ( node.right !== null ) stack.push( node.right )
    if ( node.left !== null ) stack.push( node.left )
  }
  return result
};

function recursion( root, result = [] ) {
  result.push( root.val )
  if ( root.left ) recursion( root.left, result )
  if ( root.right ) recursion( root.right, result )
  return result
}

const tree = buildTree( [ 1, 4, 2, 3, 5, 6 ] )
expect( preorderTraversal( tree ), [ 1, 4, 3, 5, 2, 6 ] )
expect( preorderTraversal( tree ), recursion( tree ) )
