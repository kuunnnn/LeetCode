import { expect } from "../../../utils/test-util.mjs";

/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/missing-number/
 * @return {number}
 * 108ms 39.9mb
 * 排序然后二分
 */
var missingNumber = function ( nums ) {
  // 因为数据的问题, 排序可以优化
  nums.sort( ( a, b ) => a - b )


  let left = 0;
  let right = nums.length - 1
  let mid = 0;
  while ( left <= right ) {
    mid = left + Math.floor( (right - left) / 2 )
    if ( nums[ mid ] === mid ) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
};

/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/missing-number/
 * @return {number}
 * 120ms  39.9mb
 * 排序然后从左遍历
 */
var missingNumber2 = function ( nums ) {
  nums.sort( ( a, b ) => a - b )
  let length = nums.length
  let val = length;
  while ( length-- ) {
    if ( nums[ length ] !== val-- ) {
      break
    }
  }
  return length + 1
};


/**
 * @param {number[]} nums
 * @link https://leetcode-cn.com/problems/missing-number/
 * @return {number}
 * 88ms  39mb
 * 时间 O(N)
 * 空间 O(1)
 * 计算 nums 总值 (因为是 0-n 的连续数可以一次计算出来)
 * 使用 上部计算出的数 减去 nums 的每一项
 * 剩下的数就是缺少的
 */
var missingNumber3 = function ( nums ) {
  // 该方法可以改为: 高斯求和公式 nums.length*(nums.length + 1)/2;
  function calc( num ) {
    const flag = num % 2 === 1
    if ( flag ) num += 1
    const n = num / 2
    return n * num + n - (flag ? num : 0)
  }

  let sum = calc( nums.length )
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    sum -= nums[ i ]
  }
  return sum
};


// 亦或原理
// 由于异或运算（XOR）满足结合律，并且对一个数进行两次完全相同的异或运算会得到原来的数
var missingNumber4 = function ( nums ) {
  let val = nums.length
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    val ^= i ^ nums[ i ]
  }
  return val
};

// 哈希
var missingNumber5 = function ( nums ) {
  let hashSet = new Set( nums )
  const length = nums.length;
  for ( let i = 0; i <= length; i++ ) {
    if ( !hashSet.has( i ) ) {
      return i
    }
  }
  return -1 // 不可能来到这一步
};

//原数组插入一个0,那么索引和值的差值和就是结果啊，索引不就是有序的0-n么
function missingNumber6( nums ) {
  nums.push( 0 )
  let res = 0;
  for ( let i = 0, len = nums.length; i < len; i++ ) {
    res += (i - nums[ i ])
  }
  nums.pop()
  return res
}

test( missingNumber6 )


function test( fn ) {
  expect( fn( [ 0, 3, 5, 8, 4, 6, 1, 9, 7 ] ), 2 )
  expect( fn( [ 3, 0, 1 ] ), 2 )
  expect( fn( [ 0 ] ), 1 )
  expect( fn( [ 1 ] ), 0 )
  expect( fn( [ 9, 6, 4, 2, 3, 5, 7, 0, 1 ] ), 8 )
  expect( fn( [ 9, 6, 8, 2, 3, 5, 7, 0, 1 ] ), 4 )

}
