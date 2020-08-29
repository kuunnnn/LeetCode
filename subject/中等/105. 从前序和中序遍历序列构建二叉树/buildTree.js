import { expect, buildTree as build } from "../../../utils/test-util.mjs";

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @return {TreeNode}
 * 96ms(82.26%) 41.1mb(94.41%)
 */
var buildTree = function ( preorder, inorder ) {
  return reduction2( preorder, inorder, 0, preorder.length - 1, 0, inorder.length )

  /**
   * @param {number[]} preorder 前序
   * @param {number[]} inorder  中序
   * @param {number} i        前序的低点 树的左范围
   * @param {number} preHigh  前序的高点 树的右范围
   * @param {number} inLow    后序的低点 树的左范围
   * @param {number} inHigh   后序的高点 树的右范围
   * @return {TreeNode|null}
   * 前序的第一个值为整棵树的顶点
   * 找到中序的对应下标
   * 如果 中序下标 != inLow  表示有右树
   * 如果 中序下标 != inHigh 表示有左树
   * 使用上述逻辑递归
   * 难点: 如何确定左右子树在前序中的范围   中序好判断
   *      根据前序的规则 先遍历中 左 右, 中序 左 中 右
   *      那么我们可以从中序中得知左树有几个子节点, 即可以知道左树在前序的范围
   */
  function reduction2( preorder, inorder, i, preHigh, inLow, inHigh ) {
    if ( i > preHigh || inLow > inHigh ) return null
    const node = new TreeNode( preorder[ i ] )
    for ( let j = inLow; j <= inHigh; j++ ) {
      if ( inorder[ j ] === preorder[ i ] ) {
        // 关键点在于计算右子树的下标范围
        // i 表示前序的下标
        // j 表示i树的顶点
        // inLow 是树的低点  j 的值在 inLow 和 inHigh 的中间, inLow-j-1 左树  j+1-inHigh 右树
        // j-inLow 表示左树有几个节点, 也就是 i 的右边还有几个左节点
        // 所以右树的值为 i+j-inLow
        if ( j >= inLow ) {
          node.left = reduction2( preorder, inorder, i + 1, i + j - inLow, inLow, j - 1, )
        }
        if ( j <= inHigh ) {
          node.right = reduction2( preorder, inorder, i + j - inLow + 1, preHigh, j + 1, inHigh )
        }
        break
      }
    }
    return node
  }
}


/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree2 = function ( preorder, inorder ) {
  // [ 根 [左] [右] ]
  // [ [左] 根 [右] ]
  const indexMap = new Map();
  let inLength = inorder.length
  while ( inLength-- ) {
    indexMap.set( inorder[ inLength ], inLength )
  }

  return reduction( 0, preorder.length - 1, 0, inorder.length-1 )

  function reduction( i, preHigh, inLow, inHigh ) {
    if ( i > preHigh || inLow > inHigh ) return null
    const node = new TreeNode( preorder[ i ] )
    const midIndex = indexMap.get( preorder[ i ] )
    if ( midIndex >= inLow ) {
      node.left = reduction( i + 1, i + midIndex - inLow, inLow, midIndex - 1, )
    }
    if ( midIndex <= inHigh ) {
      node.right = reduction( i + midIndex - inLow + 1, preHigh, midIndex + 1, inHigh )
    }
    return node
  }
}
test( buildTree2 )

function test( fn ) {
  expect( fn( [ 1, 2 ], [ 2, 1 ] ), build( [ 1, 2 ] ) )
  expect( fn( [ 1, 2 ], [ 1, 2 ] ), build( [ 1, null, 2 ] ) )
  expect( fn( [ 1, 2, 3 ], [ 3, 2, 1 ] ), build( [ 1, 2, null, 3 ] ) )
  expect( fn( [ 3, 9, 20, 15, 7 ], [ 9, 3, 15, 20, 7 ] ), build( [ 3, 9, 20, null, null, 15, 7 ] ) )
  expect( fn( [ 3, 9, 6, 8, 20, 15, 7 ], [ 6, 9, 8, 3, 15, 20, 7 ] ), build( [ 3, 9, 20, 6, 8, 15, 7 ] ) )
}

