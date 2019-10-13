/**
 * @author: hukun
 * @Date: 2019-04-22
 * @Time: 22:54
 * @function LeetCode 两数相加
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * @todo: 输出结果打印时会缺少最后的一位数,不过结果是正确的
 */

const addTwoNumbers = function(l1, l2) {
  let oneNode = l1;
  let oneArr = [];
  while (oneNode && oneNode.next) {
    oneArr.push(oneNode.val);
    oneNode = oneNode.next;
  }
  oneArr.push(oneNode.val);
  let twoNode = l2;
  let twoArr = [];
  while (twoNode && twoNode.next) {
    twoArr.push(twoNode.val);
    twoNode = twoNode.next;
  }
  twoArr.push(twoNode.val);

  twoArr = twoArr.reverse();
  oneArr = oneArr.reverse();
  /// 大数加法
  function decimalBigNumberAdd(...nums) {
    let long = nums.reduce(
      (s, c) => (c.toString().length > s ? c.toString().length : s),
      0
    );
    const formatNums = nums.map(item => {
      item = item.toString();
      let l = long - item.length;
      return new Array(l)
        .fill(0)
        .concat(Array.from(item))
        .reverse();
    });
    const queue = [];
    const getValue = () =>
      formatNums.map(item => {
        let r = item.shift();
        return typeof r !== 'undefined' ? Number(r) : r;
      });
    queue.push([getValue(), 0]);
    const result = [];
    while (queue.length > 0) {
      let [calcs, digits] = queue.shift();
      let rest =
        calcs.reduce((s, c) => (s += typeof c === 'number' ? c : 0), 0) +
        digits;
      const newDigits = ~~(rest / 10);
      if (calcs.every(item => typeof item === 'undefined') && digits === 0) {
        break;
      }
      result.push(rest % 10);
      queue.push([getValue(), Number(newDigits)]);
    }
    return result.reverse().join('');
  }
  const rest = Array.from(
    decimalBigNumberAdd(oneArr.join(''), twoArr.join(''))
  ).reverse();
  let root = {
    val: rest[0],
    next: null,
  };
  rest.shift();
  for (node of rest.join('')) {
    let lNode = {
      val: node,
      next: null,
    };
    let n = root;
    while (n.next) {
      n = n.next;
    }
    n.next = lNode;
  }
  return root;
};

function Test(l1, l2) {
  class Q {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const node = {
        val: value,
        next: null,
      };
      if (!this.root) {
        this.root = node;
        return;
      }
      let qn = this.root;
      while (qn.next) {
        qn = qn.next;
      }
      qn.next = node;
    }

    inSertMore(arr) {
      for (const item of arr) {
        this.insert(item);
      }
      return this.root;
    }
  }

  let value = addTwoNumbers(new Q().inSertMore(l1), new Q().inSertMore(l2));
  let arr = [];
  while (value && value.next) {
    arr.push(value.val);
    value = value.next;
  }
  console.log(arr.join(''));
}

Test([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [6, 5, 4]);
