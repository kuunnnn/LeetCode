/**
 * @link https://leetcode-cn.com/problems/is-subsequence/submissions/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 双指针 88ms  38mb
 */
var isSubsequence = function ( s, t ) {
  let i = 0, j = 0, sl = s.length, tl = t.length;
  while ( i < sl && j < tl ) {
    if ( s[ i ] === t[ j ] ) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === sl
};

console.log( isSubsequence( "abc", "ahbgdc" ) === true )
console.log(isSubsequence("axc","ahbgdc")===false)
console.log( isSubsequence( "aaaaaa", "bbaaaa" ) === false )
