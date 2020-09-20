/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 快慢指针
 * 88ms 39.8mb
 */
var hasCycle = function ( head ) {
  let short = head || null
  let fast = head ? head.next : null
  while ( true ) {
    if ( fast === null ) return false
    if ( short.val === fast.val ) return true
    short = short.next
    fast = fast.next
    if ( fast ) fast = fast.next
  }
};
// 神奇的答案
// 92ms 39.4mb
var hasCycle2 = function ( head ) {
  const symbol = Symbol()
  while ( head ) {
    if ( head.val === symbol ) {
      return true
    } else {
      head.val = symbol
    }
    head = head.next
  }
  return false
};
