/**
 * @param {number} n
 * @return {number}
 * 找到规则构建数组 f(1804289383) 会爆内存
 * [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5 ]
 */
var arrangeCoins = function ( n ) {
  if ( n === 1 ) return 1
  let i = 1, j = 0, k = 0;
  const result = [ 0 ]
  while ( i < n + 1 && j < n ) {
    if ( j < i ) {
      k = 0;
      while ( k < result[ i - 1 ] + 2 && j < n ) {
        result.push( result[ i - 1 ] + 1 )
        k++;
        j++;
      }
    }
    i++
  }
  return result[ n ]
};

/**
 * @param {number} n
 * @return {number}
 * 根据规则迭代计算
 * javascript  132ms, 39.5mb
 * go          4ms(69.28%)   2.2mb(100%)
 */
var arrangeCoins2 = function ( n ) {
  if ( n <= 1 ) return n
  let i = 1, j = 2, k = 2;
  while ( k < n ) {
    i = i + 1;
    j += 1;
    k += j;
  }
  return i
};

/**
 * @param {number} n
 * @return {number}
 * 根据规则迭代计算
 * javascript  128ms         39.8mb
 * go          8ms(34.94%)   2.2mb(52.94%)
 */
function arrangeCoins3( n ) {
  if ( n <= 1 ) return n
  let k = 0;
  while ( n >= 0 ) {
    k++;
    n -= k;
  }
  return k-1
}

function test( fn ) {
  console.log( fn( 1 ) === 1 )
  console.log( fn( 2 ) === 1 )
  console.log( fn( 3 ) === 2 )
  console.log( fn( 4 ) === 2 )
  console.log( fn( 5 ) === 2 )
  console.log( fn( 6 ) === 3 )
  console.log( fn( 7 ) === 3 )
  console.log( fn( 8 ) === 3 )
  console.log( fn( 1804289383 ) === 60070 )
}

test( arrangeCoins3 )
