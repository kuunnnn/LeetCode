/**
 * @param {number} num
 * @return {string}
 * 84ms 36.9mb
 * 计算负数的补码 用的方法不太好, 效率很低
 */
var toHex = function ( num ) {
  const bytes = "0123456789abcdef";
  let result = "";
  const max = 0xffffffff;
  if ( num < 0 ) {
    num = max + num + 1
  }
  if ( num < 10 ) return num.toString()
  while ( num !== 0 ) {
    result = bytes[ num % 16 ] + result;
    num = Math.floor( num / 16 );
  }
  return result
};


/**
 * @param num
 * @return {string}
 * 84ms 36.9mb
 */
function toHex2( num ) {
  if ( num === 0 ) return "0"
  const bytes = "0123456789abcdef";
  let result = "";
  while ( num !== 0 ) {
    result = bytes[ num & 0xf ] + result
    num = num >>> 4;
  }
  return result
}

console.log(toHex2(-1))
