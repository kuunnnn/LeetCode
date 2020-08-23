/**
 * Definition for isBadVersion()
 *
 * @param {number} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
function isBadVersion(version) {
  return isBadVersion.version <= version;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {number} n Total versions
   * @return {number} The first bad version
   * 76ms  37.3mb
   */
  return function (n) {
    let left = 0;
    let right = n;
    let mid = 0;
    let isBad = false;
    while (left <= right) {
      if (left === right) {
        return left;
      }
      mid = left + Math.floor((right - left) / 2);
      isBad = isBadVersion(mid);
      if (isBad) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };
};

function test(fn) {
  isBadVersion.version = 4;
  console.log(fn(1420736637) === 4);
  console.log(fn(20) === isBadVersion.version);
  console.log(fn(5) === isBadVersion.version);
  console.log(fn(5) === isBadVersion.version);
}

test(solution(isBadVersion));
