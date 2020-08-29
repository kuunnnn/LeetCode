import { expect, buildLinkedList } from "../../../utils/test-util.mjs";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode( val ) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @link https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * @return {ListNode}
 */
var mergeTwoLists = function ( l1, l2 ) {
  const head = new ListNode( 0 )
  let current = head;
  while ( l1 && l2 ) {
    if ( l1.val <= l2.val ) {
      current.next = l1
      l1 = l1.next
      current = current.next
    }else {
      current.next = l2
      l2 = l2.next
      current = current.next
    }
  }
  if ( l1 ) current.next = l1
  if ( l2 ) current.next = l2
  return head.next
};

expect(
  mergeTwoLists( buildLinkedList( [ 1, 2, 4 ] ), buildLinkedList( [ 1, 3, 4 ] ) ),
  buildLinkedList( [ 1, 1, 2, 3, 4, 4 ] )
)
