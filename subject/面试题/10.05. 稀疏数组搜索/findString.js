/**
 * @param {string[]} words
 * @param {string} s
 * @link https://leetcode-cn.com/problems/sparse-array-search-lcci/submissions/
 * @return {number}
 * 二分   words[mid] ==="" 时 向左边找到第一个非"" 位置
 * 92ms  38.1mb
 */
var findString = function ( words, s ) {
  let low = 0;
  let high = words.length - 1;
  let mid = 0;
  while ( low <= high ) {
    mid = low + Math.floor( (high - low) / 2 )
    if ( words[ mid ] === "" ) {
      while ( words[ mid ] === "" && mid > low ) {
        mid--
      }
    }
    if ( words[ mid ] === s ) {
      return mid
    }
    if ( words[ mid ] > s ) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
};



function test( fn ) {
  console.log( fn( [ "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", "" ], "ta" ) === -1 )
  console.log( fn( [ "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", "" ], "ball" ) === 4 )
}

test( findString )


