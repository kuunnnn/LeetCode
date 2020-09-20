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
 * @return {boolean}
 * 100ms  41.5mb
 * 我想岔了,一直在想跳出递归, 节省一些计算
 */
var isBalanced = function ( root ) {
  if ( !root ) return true

  function catchE( root ) {
    let r = 0, l = 0;
    if ( root.left !== null ) l = catchE( root.left ) + 1
    if ( root.right !== null ) r = catchE( root.right ) + 1
    // 跳出递归
    if ( Math.abs( r - l ) > 1 ) throw new Error( "" )
    return Math.max( r, l )
  }

  try {
    catchE( root )
  } catch ( e ) {
    return false
  }
  return true
};


// 100ms  41.3mb
function isBalanced2( root ) {
  function height( root ) {
    if ( root === null ) return 0
    let l = height( root.left ), r = height( root.right );
    if ( l >= 0 && r >= 0 && Math.abs( r - l ) <= 1 ) {
      return Math.max( r, l ) + 1
    }
    return -1
  }

  return height( root ) >= 0
}
