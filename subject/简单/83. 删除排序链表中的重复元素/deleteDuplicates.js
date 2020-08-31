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
 * @param {ListNode} head
 * @return {ListNode}
 * 116ms  39.4mb
 */
var deleteDuplicates = function ( head ) {
  if ( !head ) return head
  let root = new ListNode( 0 )
  root.next = head
  let prev = root.next
  while ( head ) {
    if ( prev.val !== head.val ) {
      prev.next = head
      prev = prev.next
    }
    head = head.next
    prev.next = null
  }
  return root.next
};

function deleteDuplicates2( head ) {
  let current = head;
  while ( current != null && current.next != null ) {
    if ( current.next.val === current.val ) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}


expect( deleteDuplicates( buildLinkedList( [ 1, 1 ] ) ), buildLinkedList( [ 1 ] ) )
expect( deleteDuplicates( buildLinkedList( [ 1, 1, 2, 2, 2, 4 ] ) ), buildLinkedList( [ 1, 2, 4 ] ) )
expect( deleteDuplicates( buildLinkedList( [ 1, 1, 2, 2, 2 ] ) ), buildLinkedList( [ 1, 2 ] ) )
expect( deleteDuplicates( buildLinkedList( [ 1, 1, 2 ] ) ), buildLinkedList( [ 1, 2 ] ) )
expect( deleteDuplicates( buildLinkedList( [ 1, 1, 1, 2 ] ) ), buildLinkedList( [ 1, 2 ] ) )
