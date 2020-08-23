/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 * @link https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/
 * 100ms 39.2mb
 * 1. 遍历计算战力 2. 排序输出
 */
var kWeakestRows = function (mat, k) {
  if (mat.length === 0) return [0];
  let m = mat.length;
  let n = mat[0].length;
  let result = [];
  for (let i = 0; i < m; i++) {
    let mid = 0,
      lo = 0,
      hi = n - 1;
    if (mat[i][0] === 0) {
      result.push({ index: i, power: lo });
      continue;
    }
    if (mat[i][hi] === 1) {
      result.push({ index: i, power: hi + 1 });
      continue;
    }
    while (lo < hi) {
      mid = lo + Math.floor((hi - lo) / 2);
      if (mat[i][mid] === 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    result.push({ index: i, power: lo });
  }

  result.sort((a, b) => {
    if (a.power === b.power) {
      return a.index - b.index;
    }
    return a.power - b.power;
  });
  return result.slice(0, k).map((v) => v.index);
};

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 * 80ms  39mb
 * 优化: 节省内存,
 *    1. 战力*100+index  排序后%100 即时 index
 *    2. 1 方法无效使用本条, 使用稳定排序算法 可以不用考虑相同战力 index 的问题
 */
var kWeakestRows2 = function (mat, k) {
  if (mat.length === 0) return [0];
  let m = mat.length;
  let n = mat[0].length;
  let result = [];
  for (let i = 0; i < m; i++) {
    let mid = 0,
      lo = 0,
      hi = n - 1;
    if (mat[i][0] === 0) {
      result.push(lo * 100 + i);
      continue;
    }
    if (mat[i][hi] === 1) {
      result.push((hi + 1) * 100 + i);
      continue;
    }
    while (lo < hi) {
      mid = lo + Math.floor((hi - lo) / 2);
      if (mat[i][mid] === 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    result.push(lo * 100 + i);
  }
  result.sort((a, b) => a - b);
  return result.slice(0, k).map((v) => v % 100);
};

test(kWeakestRows2);

function test(fn) {
  console.log(
    fn(
      [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ],
      2
    ).join(",") === "0,2"
  );
  console.log(
    fn(
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      1
    ).join(",") === "0"
  );
}
