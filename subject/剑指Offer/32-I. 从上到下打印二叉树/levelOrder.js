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
 * @return {number[]}
 * @link https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
 * 88ms 39.6mb
 */
var levelOrder = function ( root ) {
  if ( !root ) return [];
  const queue = [ root ];
  const result = [];
  let size = 1;
  while ( size > 0 ) {
    root = queue.shift()
    size--;
    result.push( root.val )
    if ( root.left !== null ) {
      queue.push( root.left )
      size++
    }
    if ( root.right != null ) {
      queue.push( root.right )
      size++
    }
  }
  return result
};

function TreeNode( val ) {
  this.val = val;
  this.left = this.right = null
}

const tree = new TreeNode( 3 )
tree.left = new TreeNode( 9 )
tree.right = new TreeNode( 20 )
tree.right.left = new TreeNode( 15 )
tree.right.right = new TreeNode( 7 )

expect( levelOrder( tree ), [ 3, 9, 20, 15, 7 ] )
