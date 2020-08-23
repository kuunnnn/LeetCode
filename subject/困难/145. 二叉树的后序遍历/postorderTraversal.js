import { buildTree, expect } from "../../../utils/test-util.mjs";
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
 * @link https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 84ms  37.8mb
 */
var postorderTraversal = function ( root ) {
  if ( root === null ) return []
  const result = [];
  const stack = [ root ];
  const hashSet = new Set()
  let size = 1;
  while ( size > 0 ) {
    while ( size > 0 ) {
      const node = stack[ size - 1 ]
      if ( hashSet.has( node ) || (node.left === null && node.right === null) ) {
        break
      }
      if ( node.right ) {
        stack.push( node.right )
        size++
      }
      if ( node.left ) {
        stack.push( node.left )
        size++
      }
      hashSet.add( node )
    }
    result.push( stack.pop().val )
    size--
  }
  return result
};

/**
 * @param {TreeNode} root
 * 使用一个 pre 变量记录上一个输出的节点
 * 判断 cur 的左右子节点是否已经输出 (cur.left===pre || cur.right===pre)
 */
function postorderTraversal2( root ) {
  if ( root === null ) return []
  let pre = null
  const result = [];
  const stack = [ root ];
  let size = 1;
  while ( size > 0 ) {
    const cur = stack[ size - 1 ]
    // 在当前节点没有左右子节点时 表示到了最底层输出 并将该节点出栈
    // 判断当前节点的左右子节点是否被遍历过 遍历过表示已经输出了 输出并出栈
    if ( cur.left === null && cur.right === null || (pre !== null && (cur.left === pre || cur.right === pre)) ) {
      result.push( cur.val )
      pre = cur
      stack.pop()
      size--;
    } else {
      if ( cur.right ) {
        stack.push( cur.right );
        size++
      }
      if ( cur.left ) {
        stack.push( cur.left );
        size++
      }
    }
  }
  return result
}

/**
 * @param {TreeNode} root
 * 反转先序遍历
 * 80ms  37.6mb
 */
function postorderTraversal3( root ) {
  if ( root === null ) return []
  const result = [];
  const stack = [ root ];
  let size = 1;
  while ( size > 0 ) {
    root = stack.pop()
    result.unshift( root.val )
    if ( root.left ) {
      stack.push( root.left );
      size++
    }
    if ( root.right ) {
      stack.push( root.right );
      size++
    }
    size--
  }
  return result
}

test( postorderTraversal3 )

function test( func ) {
  const tree = buildTree( [ 1, 2, 4, 5, 7, 8, 9 ] )
  expect( func( tree ), [ 5, 7, 2, 8, 9, 4, 1 ], '迭代后序遍历' )
  expect( afterTraversal( tree ), [ 5, 7, 2, 8, 9, 4, 1 ], '递归后序遍历' )
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function afterTraversal( root ) {
  function each( node, result ) {
    if ( node === null ) return result
    if ( node.left ) each( node.left, result )
    if ( node.right ) each( node.right, result )
    result.push( node.val )
    return result
  }

  return each( root, [] )
}
