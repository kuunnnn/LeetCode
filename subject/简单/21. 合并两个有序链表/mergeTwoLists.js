/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0),
    node = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    }
  }
  if (l1) {
    node.next = l1;
  } else {
    node.next = l2;
  }
  return head.next;
};

const a = [-6, -5, 6, 6, 7];
const b = [0];
const c = mergeTwoLists(build(a), build(b));
const d = toArray(c);
console.log(d);

function build(arr) {
  let head, node;
  arr.forEach((r) => {
    if (!head) {
      head = new ListNode(r);
      node = head;
    } else {
      node.next = new ListNode(r);
      node = node.next;
    }
  });
  return head;
}

function toArray(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}
