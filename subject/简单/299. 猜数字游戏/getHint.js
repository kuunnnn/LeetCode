import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * 96ms 39.1mb
 * 字符相同个数 = 对应位字符相同个数 + 非对应位字符相同个数
 * cows数为两个字符串的公共字符个数减去对应位相同的个数
 */
var getHint = function ( secret, guess ) {
  let a = 0;
  let b = 0;
  const num = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  for ( let i = 0, len = secret.length; i < len; i++ ) {
    if ( secret[ i ] === guess[ i ] ) a++
    else {
      if ( num[ secret[ i ] ]++ < 0 ) b++
      if ( num[ guess[ i ] ]-- > 0 ) b++
    }
  }
  return `${ a }A${ b }B`
};


expect( getHint( "1807", "7810" ), "1A3B" )
expect( getHint( "1123", "0111" ), "1A1B" )
