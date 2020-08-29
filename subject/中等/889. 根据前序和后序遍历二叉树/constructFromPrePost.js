import { buildTree, expect } from "../../../utils/test-util.mjs";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode( val ) {
  this.val = val;
  this.left = this.right = null;
}

/**
 *                  1
 *          2               3
 *     4        5      6          7
 *
 *     1 2 4 5 3 6 7
 *     4 5 2 6 7 3 1
 *     4 2 5 6 3 7 1
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * @return {TreeNode}
 * 120ms 41mb
 */
var constructFromPrePost = function ( pre, post ) {
  const indexMap = new Map()
  let length = post.length
  while ( length-- ) {
    indexMap.set( post[ length ], length )
  }

  return reduction( 0, pre.length - 1, 0, pre.length - 1 )

  function reduction( preLeft, preRight, postLeft, postRight ) {
    if ( preLeft > preRight || postLeft > postRight ) return null
    const root = new TreeNode( pre[ preLeft ] )
    const m = indexMap.get( pre[ preLeft ] )
    const mi = indexMap.get( pre[ preLeft + 1 ] )
    if ( mi === undefined ) return root
    if ( m !== postLeft ) {
      root.left = reduction( preLeft + 1, preLeft + mi - postLeft + 1, postLeft, mi, )
    }
    root.right = reduction( preLeft + mi - postLeft + 1 + 1, preRight, mi + 1, postRight )
    return root
  }
};


/**
 * @param pre
 * @param post
 * @return {TreeNode|null}
 */
var constructFromPrePost2 = function ( pre, post ) {
  const n = pre.length;
  if ( n === 0 ) return null
  const node = new TreeNode( pre[ 0 ] )
  if ( n === 1 ) return node
  const m = post.indexOf( pre[ 1 ] )
  node.left = constructFromPrePost( pre.slice( 1, m + 2 ), post.slice( 0, m + 1 ) )
  node.right = constructFromPrePost( pre.slice( m + 2 ), post.slice( m + 1 ) )
  return node;
};

test( constructFromPrePost2 )

function test( fn ) {
  expect( fn( [ 1, 2, 4, 5, 3, 6, 7 ], [ 4, 5, 2, 6, 7, 3, 1 ] ), buildTree( [ 1, 2, 3, 4, 5, 6, 7 ] ) )
  expect( fn( [ 1, ], [ 1 ] ), new TreeNode( 1 ) )
}
