/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */


/**
 * @param {Node} root
 * @return {number}
 * 广度优先遍历
 * 100ms 41.4mb
 */
var maxDepth = function ( root ) {
  if ( root === null ) return 0
  const queue = [ [ root ] ];
  let result = 0;
  let nextLevel = [];
  let currentLevel = [];
  while ( queue.length !== 0 ) {
    nextLevel = [];
    currentLevel = queue.shift()
    if ( currentLevel.length === 0 ) {
      break;
    }
    for ( let node of currentLevel ) {
      nextLevel.push( ...node.children )
    }
    result++
    queue.push( nextLevel )
  }
  return result
};


/**
 * @param {Node} root
 * @return {number}
 * 广度优先遍历
 * 100ms 41.4mb
 */
function maxDepth2( root ) {
  if ( root === null ) return 0
  if ( root.children.length === 0 ) return 1
  const result = []
  for ( let node of root.children ) {
    result.push( maxDepth2( node ) )
  }
  // 从最下层返回 一次加一
  return Math.max( ...result ) + 1
}

function Node( val, children ) {
  this.val = val;
  this.children = children;
}

const root = new Node()
root.children = [
  new Node( 1, [
      new Node( 1, [
          new Node( 1, [] )
        ]
      )
    ]
  )
]

console.log( maxDepth( root ) )
console.log( maxDepth2( root ) )
