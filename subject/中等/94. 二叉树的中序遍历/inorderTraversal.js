import { expect, buildTree } from "../../../utils/buildTree.mjs";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 72ms  37.7mb
 */
var inorderTraversal = function ( root ) {
  if ( !root ) return []
  const result = [];
  const stack = [];
  while ( root !== null || stack.length > 0 ) {
    while ( root !== null ) {
      stack.push( root )
      root = root.left
    }
    root = stack.pop()
    result.push( root.val )
    root = root.right
  }
  return result
};

function traversal( root ) {
  const result = [];
  return (function forEach( node, res ) {
    if ( !node ) return res
    if ( node.left ) forEach( node.left, res )
    res.push( node.val )
    if ( node.right ) forEach( node.right, res )
    return res
  })( root, result )
}

const tree = buildTree( [ 1, 2, 3, 4, 5, 6, 7 ] )

expect( inorderTraversal( tree ), [ 4, 2, 5, 1, 6, 3, 7 ] )
