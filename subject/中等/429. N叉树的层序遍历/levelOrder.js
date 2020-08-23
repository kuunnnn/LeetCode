/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @link https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * @return {number[][]}
 * 132ms  43.1mb
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [[root]];
  const result = [[root.val]];
  let nextLevel = [];
  let currValue = [];
  let currLevel = [];
  while (queue.length !== 0) {
    currLevel = queue.shift();
    currValue = [];
    nextLevel = [];
    for (let node of currLevel) {
      if (node.children.length !== 0) {
        for (let child of node.children) {
          currValue.push(child.val);
          nextLevel.push(child);
        }
      }
    }
    if (nextLevel.length !== 0) {
      result.push(currValue);
      queue.push(nextLevel);
    }
  }
  return result;
};

/**
 * @param {Node} root
 * @link https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * @return {number[][]}
 * 100ms
 */
var levelOrder2 = function (root) {
  if (root === null) return [];
  const queue = [root];
  const result = [[]];
  let level = 0;
  while (queue.length !== 0) {
    const size = queue.length;
    result[level] = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      result[level].push(node.val);
      queue.push(...node.children);
    }
    level++;
  }
  return result;
};

function Node(val, children) {
  this.val = val;
  this.children = children;
}

const root = new Node(1, [
  new Node(2, [new Node(4, []), new Node(5, [])]),
  new Node(3, [new Node(6, []), new Node(7, [])]),
]);
console.log(levelOrder2(root));
