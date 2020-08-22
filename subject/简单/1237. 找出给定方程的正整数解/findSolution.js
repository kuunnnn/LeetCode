import { expect } from "../../../utils/buildTree.mjs";

function CustomFunction( schema = 1 ) {
  /**
   * @param {number} x
   * @param {number} y
   * @return {number}
   */
  this.f = function ( x, y ) {
    return schema === 1 ? x + y : x * y
  };
}

/**
 * @param {CustomFunction} customfunction
 * @param {number} z
 * @return {number[][]}
 * 84ms  37.7mb
 * 1. 需要注意最大值是 1000 而不是 z
 * 2. 二分法是 遍历将 x 定在 1-1000 然后二分查找 y, 需要及时缩小右边界在
 */
var findSolution = function ( customfunction, z ) {
  let low = 1;
  let high = z;
  const result = [];
  let value = 0;
  while ( low <= 1000 && high > 0 ) {
    value = customfunction.f( low, high );
    if ( value === z ) {
      result.push( [ low, high ] )
      low++
      high--
    } else if ( value > z ) {
      high--
    } else {
      low++
    }
  }
  return result
};

expect( findSolution( new CustomFunction( 1 ), 5 ), [ [ 1, 4 ], [ 2, 3 ], [ 3, 2 ], [ 4, 1 ] ] )
expect( findSolution( new CustomFunction( 2 ), 5 ), [ [ 1, 5 ], [ 5, 1 ] ] )
