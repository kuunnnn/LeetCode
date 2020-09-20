/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 88ms 37.8mb
 * 哈希表记录字符出现的次数
 */
var findTheDifference = function ( s, t ) {
  const hashMap = new Map()
  for ( const char of s ) {
    const num = hashMap.get( char ) || 0
    hashMap.set( char, num + 1 )
  }
  for ( const char of t ) {
    const num = hashMap.get( char )
    if ( !num || num <= 0 ) return char
    hashMap.set( char, num - 1 )
  }
  return ""
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 88ms 37.4mb
 * 计算 charCode
 */
var findTheDifference2 = function ( s, t ) {
  let num1 = 0
  let num2 = 0
  for ( let i = 0, len = s.length; i < len; i++ ) {
    num1 += s.charCodeAt( i )
    num2 += t.charCodeAt( i )
  }
  num2 += t.charCodeAt( t.length - 1 )
  return String.fromCharCode( num2 - num1 )
};
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 68ms 37.8mb
 * 异或
 */
var findTheDifference3 = function ( s, t ) {
  let num = t.charCodeAt( t.length - 1 );
  for ( let i = 0, len = s.length; i < len; i++ ) {
    num ^= s.charCodeAt( i )
    num ^= t.charCodeAt( i )
  }
  return String.fromCharCode( num )
};
