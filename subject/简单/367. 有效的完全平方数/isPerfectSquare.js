/**
 * @param {number} num
 * @return {boolean}
 * 108ms 37.6mb
 */
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let left = 2;
  let right = num / 2;
  let mid = 0;
  let temp = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    temp = num * mid;
    if (temp === num) {
      return true;
    }
    if (temp > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
function test(fn) {
  console.log(fn(16) === true);
  console.log(fn(14) === false);
}

test(isPerfectSquare);
