import { buildTree } from "../../../utils/test-util.mjs";
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 88ms 37.2mb
 * 先序遍历 or 后序 or 中序 or 层序 遍历一遍, 判断
 */
var isSameTree = function ( p, q ) {
  function values( root, vals ) {
    if ( !root ) return vals.push( null )
    values( root.left, vals )
    values( root.right, vals )
    vals.push( root.val )
  }

  const v1 = [];
  const v2 = [];
  values( p, v1 )
  values( q, v2 )
  if ( v1.length !== v2.length ) return false
  for ( let i = 0, len = v1.length; i < len; i++ ) {
    if ( v1[ i ] !== v2[ i ] ) return false
  }
  return true
};

// 递归
// 80ms 37.2mb
var isSameTree3 = function ( p, q ) {
  if(p===null && q===null) return true
  if(p===null || q===null) return false
  if(q.val !== p.val) return false
  return isSameTree3(p.left, q.left) && isSameTree3(p.right, q.right)
};

// 72ms 37.2mb
var isSameTree2 = function ( p, q ) {
  const stack1 = [ p ];
  const stack2 = [ q ];
  while ( stack1.length && stack2.length ) {
    const n1 = stack1.pop()
    const n2 = stack2.pop()
    if ( n1 === n2 ) continue
    if ( n1 && n2 ) {
      if ( n1.val !== n2.val ) return false
      stack1.push( n1.left )
      stack1.push( n1.right )
      stack2.push( n2.left )
      stack2.push( n2.right )
    } else {
      return false
    }
  }
  return true
};
