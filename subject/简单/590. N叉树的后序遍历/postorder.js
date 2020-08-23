import { expect } from "../../../utils/test-util.mjs";

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node( val, children ) {
  this.val = val;
  this.children = children;
}


/**
 * @param {Node} root
 * @return {number[]}
 * @link https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * 112ms 41.3mb
 * 优化点 在 includes
 */
var postorder = function ( root ) {
  if ( root === null ) return []
  const stack = [ root ];
  const result = [];
  let size = 1;
  let pre = null;
  let childSize = 0;
  while ( size > 0 ) {
    root = stack[ size - 1 ];
    childSize = root.children.length;
    // 在当前节点没有左右子节点时 表示到了最底层输出 并将该节点出栈
    // 判断当前节点的左右子节点是否被遍历过 遍历过表示已经输出了 输出并出栈
    if ( childSize === 0 || (pre !== null && (includes( root.children, pre, childSize - 1 ))) ) {
      result.push( root.val );
      pre = root;
      stack.pop();
      size--;
    } else {
      for ( let i = childSize - 1; i >= 0; i-- ) {
        stack.push( root.children[ i ] );
        size++;
      }
    }
  }

  function includes( array, target, l ) {
    while ( l >= 0 ) {
      if ( array[ l ] === target ) {
        return true
      }
      l--
    }
    return false
  }

  return result
};
/**
 * @param {Node} root
 * @return {[]|number[]}
 * 112ms  41.4mb
 */
var postorder2 = function ( root ) {
  if ( root === null ) return []
  const stack = [ root ];
  const result = [];
  let size = 1;
  while ( size > 0 ) {
    root = stack.pop();
    size--;
    result.unshift( root.val )
    for ( let i = 0; i < root.children.length; i++ ) {
      if ( root.children[ i ] ) {
        stack.push( root.children[ i ] );
        size++;
      }
    }
  }
  return result
};

const tree = new Node( 1, [
  new Node( 3, [
    new Node( 5, [] ),
    new Node( 6, [] ),
  ] ),
  new Node( 2, [] ),
  new Node( 4, [] ),
] )

expect( postorder2( tree ), [ 5, 6, 3, 2, 4, 1 ] )

