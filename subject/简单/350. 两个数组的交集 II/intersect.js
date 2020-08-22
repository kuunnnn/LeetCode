/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @return {number[]}
 * 找出较短的数组, 双 Map 记录出现频次
 * 80ms  39.9mb
 */
var intersect = function ( nums1, nums2 ) {
  let short = nums1, long = nums2;
  if ( nums1.length > nums2.length ) {
    short = nums2
    long = nums1
  }
  const t1 = new Map()
  const t2 = new Map()
  const t3 = []
  for ( let i = 0, len = short.length; i < len; i++ ) {
    let num = 1
    if ( t1.has( short[ i ] ) ) {
      num = t1.get( short[ i ] ) + 1
    }
    t1.set( short[ i ], num )
  }
  for ( let i = 0, len = long.length; i < len; i++ ) {
    let num = 1
    if ( t2.has( long[ i ] ) ) {
      num = t2.get( long[ i ] ) + 1
    }
    t2.set( long[ i ], num )
  }
  for ( let [ num, time ] of t1.entries() ) {
    if ( t2.has( num ) ) {
      let i = 0;
      let min = Math.min( time, t2.get( num ) )
      while ( i < min ) {
        t3.push( num )
        i++
      }
    }
  }
  return t3
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @return {number[]}
 * 1. 排序
 * 2. 找到长短数组
 * 3. map 缓存, 对 long 进行二分查找 因为缓存 相同的不会查询 2 次
 * 4. 对二分查找的位置进行, 指针扩散 ++  -- 找到有几个相同元素
 * 5. 对 map 进行遍历 根据 nums1 nums2 交集元素 的次数进行构建 result
 * 108ms  41.2mb
 */
function intersect2( nums1, nums2 ) {
  nums1.sort( ( a, b ) => a - b )
  nums2.sort( ( a, b ) => a - b )
  let short = nums1, long = nums2;
  if ( nums1.length > nums2.length ) {
    short = nums2
    long = nums1
  }
  const result = [];
  const t1 = new Map();
  let index = 0, j = 0, v = 0, l2 = long.length;
  for ( let i = 0, len = short.length; i < len; i++ ) {
    if ( t1.has( short[ i ] ) ) {
      let t = t1.get( short[ i ] )
      t.times += 1
      t1.set( short[ i ], t )
      continue
    }
    index = indexOf( long, short[ i ] )
    if ( index === -1 ) {
      continue
    }
    j = index
    while ( j >= 0 ) {
      if ( long[ j ] !== short[ i ] ) break
      j--
    }
    v = index - j - 1
    j = index
    while ( j < l2 ) {
      if ( long[ j ] !== short[ i ] ) break
      j++
    }
    v += j - index
    t1.set( short[ i ], { times: 1, index: v } )
  }
  for ( let [ k, v ] of t1.entries() ) {
    let i = 0, min = Math.min( v.index, v.times );
    while ( i < min ) {
      result.push( k )
      i++
    }
  }

  function indexOf( array, num ) {
    let left = 0, right = array.length - 1, mid = 0;
    while ( left <= right ) {
      mid = left + Math.floor( (right - left) / 2 )
      if ( left === right ) {
        mid = left
        break
      }
      if ( array[ mid ] === num ) {
        break
      }
      if ( array[ mid ] < num ) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return array[ mid ] === num ? mid : -1
  }

  return result
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @return {number[]}
 * 使用 map 记录频次, 遍历数组
 * intersect 的优化版
 * 96ms   38.8mb
 */
function intersect3( nums1, nums2 ) {
  let short = nums1, long = nums2;
  if ( nums1.length > nums2.length ) {
    short = nums2
    long = nums1
  }
  const t1 = new Map()
  const result = []
  for ( let i = 0, len = short.length; i < len; i++ ) {
    let num = 1
    if ( t1.has( short[ i ] ) ) {
      num = t1.get( short[ i ] ) + 1
    }
    t1.set( short[ i ], num )
  }
  let n = 0, t = 0;
  for ( let i = 0, len = long.length; i < len; i++ ) {
    n = long[ i ]
    if ( t1.has( n ) ) {
      t = t1.get( n )
      if ( t !== 0 ) {
        result.push( n )
        t1.set( n, t - 1 )
      }
    }
  }
  return result
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @return {number[]}
 * 排序 双指针
 * 88ms   38.5mb
 */
function intersect4( nums1, nums2 ) {
  nums1.sort( ( a, b ) => a - b )
  nums2.sort( ( a, b ) => a - b )
  let i = 0, j = 0, l1 = nums1.length, l2 = nums2.length;
  const result = [];
  while ( i < l1 && j < l2 ) {
    if ( nums1[ i ] === nums2[ j ] ) {
      result.push( nums1[ i ] )
      i++;
      j++
    } else if ( nums1[ i ] < nums2[ j ] ) {
      i++
    } else {
      j++
    }
  }
  return result
}

test( intersect4 )

function test( fn ) {
  console.log( fn( [ 1, 1, 1, 2, 2 ], [ 2, 2 ] ).join( "," ) === "2,2" )
  console.log( fn( [ 4, 5, 9 ], [ 4, 4, 8, 9, 9 ] ).join( "," ) === "4,9" )
}
