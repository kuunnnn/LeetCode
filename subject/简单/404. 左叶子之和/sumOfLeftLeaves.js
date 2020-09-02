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
 * 88ms 40.6mb
 * 1. 递归
 * 2. 广度优先
 */
var sumOfLeftLeaves = function ( root ) {
  if ( !root ) return 0
  let val = 0;
  if ( root.left && root.left.left === null && root.left.right === null ) {
    val += root.left.val
  }
  return val + sumOfLeftLeaves( root.left ) + sumOfLeftLeaves( root.right )
};
/**
 * @param {TreeNode} root
 * @return {number}
 * 84ms 40mb
 * 使用变量优化数组 shift, length 操作的性能影响, 但是内存会大一些
 */
var sumOfLeftLeaves2 = function ( root ) {
  if ( !root ) return 0
  const queue = [ root ]
  let val = 0;
  let length = 1;
  let idx = 0;
  while ( idx < length ) {
    root = queue[ idx++ ]
    if ( root.right ) {
      queue.push( root.right )
      length++
    }
    if ( root.left ) {
      if ( root.left.right === null && root.left.left === null ) {
        val += root.left.val
      }
      queue.push( root.left )
      length++
    }
  }
  return val
};
// 递归优化
// 75ms  39.9mb
var sumOfLeftLeaves3 = function ( root ) {
  function sum( root, isLeft ) {
    if ( !root ) return 0;
    if ( isLeft && root.left === null && root.right === null ) {
      return root.val
    }
    const leftValue = root.left ? sum( root.left, true ) : 0
    const rightValue = root.right ? sum( root.right, true ) : 0
    return leftValue + rightValue
  }

  return sum( root, false )
}
