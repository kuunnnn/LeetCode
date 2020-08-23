import { expect } from "../../../utils/test-util.mjs";

/**
 * // Definition for a Node.
 * function Node(val, children) {
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
 * @link https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * 128ms  41.4mb
 * 用 size 代替 stack.length  100ms  40.6mb
 */
var preorder = function ( root ) {
  if ( !root ) return []
  const stack = [ root ];
  const result = [];
  let size = 1;
  while ( size !== 0 ) {
    root = stack.pop()
    size--;
    result.push( root.val )
    for ( let i = root.children.length - 1; i >= 0; i-- ) {
      stack.push( root.children[ i ] )
      size++
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

expect( preorder( tree ), [ 1, 3, 5, 6, 2, 4 ] )
