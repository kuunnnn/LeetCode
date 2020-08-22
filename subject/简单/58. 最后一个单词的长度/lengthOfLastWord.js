// 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
// 如果不存在最后一个单词，请返回 0 。
// 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。

/**
 * @param {string} s
 * @link https://leetcode-cn.com/problems/length-of-last-word/
 * @return {number}
 * 84ms 37.2mb
 */
var lengthOfLastWord = function ( s ) {
  if ( s === " " || s === "" ) return 0
  let n = 0;
  for ( let i = s.length - 1; i >= 0; i-- ) {
    if ( s[ i ] !== " " ) {
      n++
    } else {
      if ( n !== 0 ) {
        return n
      }
    }
  }
  return n
};
// 84ms 37.9mb
var lengthOfLastWord2 = function ( s ) {
  if ( s === " " || s === "" ) return 0
  let n = 0, l = s.length - 1;
  while ( s[ l ] === " " ) {
    l--
  }
  while ( s[ l ] !== " " && l >= 0 ) {
    n++
    l--
  }
  return n
};

function test( fn ) {
  console.log( fn( "hello World" ) === 5 )
  console.log( fn( "" ) === 0 )
  console.log( fn( " " ) === 0 )
  console.log( fn( "     " ) === 0 )
  console.log( fn( "World" ) === 5 )
}

test( lengthOfLastWord2 )
