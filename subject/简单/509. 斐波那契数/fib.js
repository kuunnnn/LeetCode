/**
 * @param {number} N
 * @return {number}
 * 92ms  36.7mb
 * 递归
 */
var fib = function ( N ) {
  if ( N < 2 ) return N
  return fib( N - 1 ) + fib( N - 2 )
};

/**
 * @param {number} N
 * @return {number}
 * 76ms, 36.9mb
 * 递归优化
 */
var fib1 = function ( N ) {
  const cache = new Map( [
    [ 0, 0 ],
    [ 1, 1 ],
  ] )

  function call( N ) {
    if ( N < 2 ) return N
    if ( cache.has( N ) ) return cache.get( N )
    const res = call( N - 1 ) + call( N - 2 )
    cache.set( N, res )
    return res
  }

  return call( N )
};

/**
 * @param {number} N
 * @return {number}
 * 76ms  36.9mb
 * 动态规划 1
 */
var fib2 = function ( N ) {
  const dp = [ 0, 1 ]
  for ( let i = 2; i <= N; i++ ) {
    dp[ i ] = dp[ i - 1 ] + dp[ i - 2 ]
  }
  return dp[ N ]
};

/**
 * @param {number} N
 * @return {number}
 * 68ms  36.9mb
 * 动态规划 2
 */
var fib3 = function ( N ) {
  if ( N < 2 ) return N
  let dp1 = 1;
  let dp2 = 0;
  let res = 1;
  for ( let i = 2; i <= N; i++ ) {
    res = dp1 + dp2
    dp2 = dp1
    dp1 = res
  }
  return res
};

console.log( fib( 7 ), fib( 2 ), fib( 1 ) )
console.log( fib1( 7 ), fib1( 2 ), fib1( 1 ) )
console.log( fib2( 7 ), fib2( 2 ), fib2( 1 ) )
console.log( fib3( 7 ), fib3( 2 ), fib3( 1 ) )
