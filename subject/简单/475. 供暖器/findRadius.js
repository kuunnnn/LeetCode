import { expect } from "../../../utils/buildTree.mjs";

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @link https://leetcode-cn.com/problems/heaters/
 * @return {number}
 * 112ms 42.2mb
 * 排序
 * 思路 :对于每座房子，有前后两个供暖器(只有一个供暖器的情况另外判断)，寻找它们之间的较小距离，并与当前最大半径比较更新即可
 * 1. 对于每个房屋，要么用前面的暖气，要么用后面的，二者取近的，得到距离；
 * 2. 对于所有的房屋，选择最大的上述距离。
 */
var findRadius = function ( houses, heaters ) {
  houses.sort( ( a, b ) => a - b )
  heaters.sort( ( a, b ) => a - b )
  let i = 0, res = 0, len = heaters.length - 1;
  for ( const house of houses ) {
    for ( ; i < len; i++ ) {
      if ( Math.abs( heaters[ i ] - house ) < Math.abs( heaters[ i + 1 ] - house ) ) {
        break;
      }
    }
    res=Math.max(res, Math.abs( heaters[ i ] - house ))
  }
  return res
};

expect( findRadius( [ 1, 2, 3, 4 ], [ 1, 4 ] ), 1 )
expect( findRadius( [ 1, 2, 3 ], [ 2 ] ), 1 )
expect( findRadius( [ 1, 5 ], [ 2 ] ), 3 )

