import {
  buildLinkedList,
  isEquals,
  linkedListToArray,
} from "../../../utils/test-util.mjs";

const linkedList = buildLinkedList([1, 2, 3, 4, 5]);

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @link https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * @return {ListNode}
 * 100ms  41.3mb
 * 1. 使用一个 k 长的数组存储
 */
var reverseKGroup = function (head, k) {
  if (head === null) return head;
  let newHead = new ListNode(0);
  let current = newHead;
  let nextNode = null;
  const nodes = [head];
  while (head) {
    head = head.next;
    if (nodes.length === k) {
      nextNode = nodes[k - 1].next;
      while (nodes.length !== 0) {
        current.next = nodes.pop();
        current = current.next;
      }
      head = nextNode;
    }
    nodes.push(head);
  }
  if (nodes.length !== 0) {
    current.next = nodes[0];
  }
  return newHead.next;
};

var reverseKGroup2 = function (head, k) {
  if (head === null) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  for (let i = 0, s = Math.floor(len / k); i < s; i++) {
    for (let j = 0; j < k - 1; j++) {}
  }
  return dummy.next;
};

function reverse(head, tail) {
  let pre = null;
  let cur = head;
  let nxt = head.next;
  while (cur !== tail) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}

let root = new ListNode(0);
root.next = new ListNode(1);
root.next.next = new ListNode(2);
root.next.next.next = new ListNode(3);
root.next.next.next.next = new ListNode(4);
let tail = root.next.next.next;
console.log(linkedListToArray(reverse(root, null)));

function test(fn) {
  isEquals(linkedListToArray(fn(linkedList, 5)), [5, 4, 3, 2, 1]);
  isEquals(linkedListToArray(fn(linkedList, 2)), [2, 1, 4, 3, 5]);
  isEquals(linkedListToArray(fn(linkedList, 2)), [3, 2, 1, 4, 5]);
}
