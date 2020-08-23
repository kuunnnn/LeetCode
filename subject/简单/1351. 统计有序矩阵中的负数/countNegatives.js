/**
 * @param {number[][]} grid
 * @link https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @return {number}
 * 二分+优化
 * 88ms  38.8mb
 */
var countNegatives = function (grid) {
  if (grid.length === 0) return 0;
  let result = 0;
  for (let i = 0, len = grid.length; i < len; i++) {
    let mid = 0,
      lo = 0,
      hi = grid[i].length - 1;
    if (grid[i][0] < 0) {
      result += grid[i].length;
      continue;
    }
    if (grid[i][hi] >= 0) {
      continue;
    }
    while (lo < hi) {
      mid = lo + Math.floor((hi - lo) / 2);
      if (grid[i][mid] >= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    result += grid[i].length - lo;
  }
  return result;
};

/**
 * @param {number[][]} grid
 * @return number
 * 76ms  38.8mb
 * 从右上角开始遍历，i = 0, j = grid[0].length - 1
 如果当前值大于等于 0，那么前面的值肯定都非负，那么直接跳过，进入下一行, 即 i++
 如果当前值小于 0，那么当前值以及同列下的值都是小于 0 的，那么直接添加，然后进行下一列，即 j--
 */
function countNegatives1(grid) {
  if (grid.length === 0) return 0;
  let i = 0;
  let j = grid[0].length - 1;
  let m = grid.length;
  let nums = 0;
  while (i < m && j >= 0) {
    if (grid[i][j] >= 0) {
      i++;
    } else {
      nums += m - i;
      j--;
    }
  }
  return nums;
}

function test(fn) {
  console.log(
    fn([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ]) === 8
  );
  console.log(
    fn([
      [1, -1],
      [-1, -1],
    ]) === 3
  );
  console.log(
    fn([
      [3, 2],
      [1, 0],
    ]) === 0
  );
  console.log(
    fn([
      [8, -2, -2, -2, -4, -5, -5],
      [-2, -3, -3, -4, -4, -5, -5],
      [-2, -5, -5, -5, -5, -5, -5],
      [-3, -5, -5, -5, -5, -5, -5],
      [-5, -5, -5, -5, -5, -5, -5],
      [-5, -5, -5, -5, -5, -5, -5],
      [-5, -5, -5, -5, -5, -5, -5],
      [-5, -5, -5, -5, -5, -5, -5],
      [-5, -5, -5, -5, -5, -5, -5],
    ]) === 62
  );
  console.log(
    fn([
      [6, 5, 4, 4, 3, -2, -2, -2],
      [5, -2, -2, -3, -3, -4, -4, -4],
      [-3, -3, -3, -4, -4, -5, -5, -5],
      [-3, -5, -5, -5, -5, -5, -5, -5],
      [-4, -5, -5, -5, -5, -5, -5, -5],
    ]) === 34
  );
}

test(countNegatives);
