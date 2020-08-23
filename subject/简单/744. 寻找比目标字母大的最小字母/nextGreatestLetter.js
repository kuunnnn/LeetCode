/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 * 88ms 38.7mb
 */
var nextGreatestLetter = function (letters, target) {
  const targetCode = target.charCodeAt(0);
  let left = 0;
  let len = letters.length - 1;
  let right = len;
  if (targetCode < letters[0].charCodeAt(0)) return letters[0];
  if (targetCode >= letters[right].charCodeAt(0)) return letters[0];
  let mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (letters[mid].charCodeAt(0) === targetCode) {
      break;
    }
    if (left === right) {
      break;
    }
    if (letters[mid].charCodeAt(0) < targetCode) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  while (mid < len) {
    if (letters[mid].charCodeAt(0) > targetCode) {
      break;
    }
    mid++;
  }
  return letters[mid];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a") === "c");
console.log(nextGreatestLetter(["c", "f", "j"], "c") === "f");
console.log(nextGreatestLetter(["c", "f", "j"], "d") === "f");
console.log(nextGreatestLetter(["c", "f", "j"], "g") === "j");
console.log(nextGreatestLetter(["c", "f", "j"], "j") === "c");
console.log(nextGreatestLetter(["c", "f", "j"], "k") === "c");
