/**
 * @param {number} n
 * @return {number}
 * 88ms 36.7mb
 * 1 2 3 4
 * 1 2 3 5
 */
var climbStairs = function ( n ) {
  if ( n < 4 ) return n
  let dp1 = 3;
  let dp2 = 2;
  let res = 5;
  for ( let i = 4; i <= n; i++ ) {
    res = dp1 + dp2
    dp2 = dp1;
    dp1 = res;
  }
  return res
};
