//// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function ( nums, target ) {
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    if ( nums[ i ] > target ) {
      continue;
    }
    for ( let j = 0; j < len; j++ ) {
      if ( i !== j && nums[ i ] + nums[ j ] === target ) {
        return [ i, j ];
      }
    }
  }
};

function twoSum2( nums, target ) {
  nums.sort( ( a, b ) => a - b )
  let l = 0;
  let r = nums.length - 1;
  while ( l !== r ) {
    if ( nums[ r ] > target ) {
      r--;
    }
    if ( nums[ r ] + nums[ l ] === target ) {
      return [ l, r ]
    }
    if ( nums[ r ] + nums[ l ] > target ) {
      r--
    }
    if ( nums[ r ] + nums[ l ] < target ) {
      l++
    }
  }
}

function twoSum3( nums, target ) {
  let c = new Map()
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    if ( target < nums[ i ] ) {
      continue
    }
    if ( c.has( nums[ i ] ) ) {
      return [ c.get( nums[ i ] ), i ]
    } else {
      c.set( target - nums[ i ], i )
    }
  }
  return c
}

console.log( twoSum2( [ 2, 7, 11, 15 ], 9 ) )
