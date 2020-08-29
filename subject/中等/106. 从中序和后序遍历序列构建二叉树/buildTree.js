import { buildTree as build, expect } from "../../../utils/test-util.mjs";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode( val ) {
  this.val = val;
  this.left = this.right = null
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * @return {TreeNode}
 * 116ms  41.7mb
 * 和 105 同样套路
 */
var buildTree = function ( inorder, postorder ) {
  const indexMap = new Map();
  let inLength = inorder.length
  while ( inLength-- ) {
    indexMap.set( inorder[ inLength ], inLength )
  }
  return reduction( 0, postorder.length - 1, 0, inorder.length - 1 )

  function reduction( postLeft, i, inLeft, inRight ) {
    if ( postLeft > i || inLeft > inRight ) return null
    const node = new TreeNode( postorder[ i ] )
    const midIndex = indexMap.get( postorder[ i ] )
    if ( midIndex !== inLeft ) {
      node.left = reduction( postLeft, postLeft + (midIndex - inLeft) - 1, inLeft, midIndex - 1 )
    }
    if ( midIndex !== inRight ) {
      node.right = reduction( i - (inRight - midIndex), i - 1, midIndex + 1, inRight )
    }
    return node
  }
};
test( buildTree )

function test( fn ) {
  expect( fn( [ 9, 3, 15, 20, 7 ], [ 9, 15, 7, 20, 3 ] ), build( [ 3, 9, 20, null, null, 15, 7 ] ) )
}

