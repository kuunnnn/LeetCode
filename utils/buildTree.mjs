/**
 * @param val
 * @constructor
 */
function TreeNode( val ) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param val
 * @constructor
 */
function ListNode( val ) {
  this.val = val;
  this.next = null;
}

/**
 *
 * @param {number[]} array
 * @return {ListNode}
 */
export function buildLinkedList( array ) {
  const root = new ListNode( 0 )
  let head = root;
  array.forEach( e => {
    head.next = new ListNode( e )
    head = head.next
  } )
  return root.next
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
export function linkedListToArray( head ) {
  const result = [];
  while ( head ) {
    result.push( head.val )
    head = head.next
  }
  return result
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
export function buildTree( preorder ) {
  const list = preorder.map( ( v ) => new TreeNode( v ) );
  for ( let i = 0; i < Math.floor( list.length / 2 ); i++ ) {
    const j = i * 2 + 1;
    if ( j < list.length ) {
      const item = list[ i ];
      const left = list[ j ];
      const right = j + 1 < list.length ? list[ j + 1 ] : null;
      item.left = left.val === null ? null : left;
      item.right = right === null ? null : right.val === null ? null : right;
    }
  }
  return !list[ 0 ] ? null : list[ 0 ];
}


export function typeOf( target ) {
  return Object.prototype.toString.call( target ).match( /([^[\]\s](\w*))/g )[ 1 ]
}

/**
 * @name isEquals
 * @param object
 * @param target
 * @return {boolean|*|undefined|boolean}
 */
export function isEquals( object, target ) {
  if ( typeOf( object ) !== typeOf( target ) ) {
    return false
  }
  if ( typeof object !== "object" || object === null ) {
    if ( Number.isNaN( object ) && Number.isNaN( target ) ) {
      return true
    }
    return object === target
  }
  // 比较内存地址
  if ( object === target ) {
    return true
  }
  if ( Array.isArray( object ) ) {
    if ( object.length !== target.length ) {
      return false
    }
    for ( let i = 0, len = object.length; i < len; i++ ) {
      if ( !isEquals( object[ i ], target[ i ] ) ) {
        return false
      }
    }
    return true
  }
  if ( typeOf( object ) === "Object" ) {
    if ( Object.keys( object ).length !== Object.keys( target ).length ) {
      return false
    }
    // 循环引用如何判断
    for ( let key of Object.keys( object ) ) {
      if ( !isEquals( object[ key ], target[ key ] ) ) {
        return false
      }
    }
    return true
  }
  if ( typeOf( object ) === "Map" ) {
    if ( object.size !== target.size ) {
      return false
    }
    for ( let [ key, value ] of object.entries() ) {
      // 比较 Map 时  key 需要是基础类型不然引用地址不对,
      if ( !target.has( key ) ) {
        return false
      }
      if ( !isEquals( value, target.get( key ) ) ) {
        return false
      }
    }
    return true
  }
  if ( typeOf( object ) === "Set" ) {
    if ( object.size !== target.size ) {
      return false
    }
    return isEquals( Array.from( object ), Array.from( target ) )
  }
  if ( typeOf( object ) === "RegExp" ) {
    return object.source === target.source && object.flags === target.flags
  }
  throw new TypeError( `Unsupported data type: ${ typeOf( target ) }` )
}


/**
 * @name isEquals
 * @param {string} desc
 * @param {any} object
 * @param {any} target
 * @return {boolean|*|undefined|boolean}
 */
export function expect( object, target, desc = "" ) {
  if ( !isEquals( object, target ) ) {
    console.log( "object", object, "target", target )
    throw new Error( `${ desc } Is Not Equals` )
  }
  console.log( "%s is Ok!", desc )
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export function levelOrder( root ) {
  if ( root === null ) return []
  const queue = [ [ root ] ];
  const result = [];
  let nextLevel = [];
  let currentLevel = [];
  let currentValue = [];
  while ( queue.length !== 0 ) {
    nextLevel = [];
    currentValue = [];
    currentLevel = queue.shift()
    if ( currentLevel.length === 0 ) {
      break;
    }
    for ( let node of currentLevel ) {
      currentValue.push( node.val )
      if ( node.left !== null ) nextLevel.push( node.left )
      if ( node.right !== null ) nextLevel.push( node.right )
    }
    result.push( currentValue )
    queue.push( nextLevel )
  }
  return result
}

function testIsEquals() {
  expect( new Map( [ [ 1, 2 ] ] ), new Map( [ [ 1, 2 ] ] ), "map" )
  expect( new Set( [ 1, 2, 3 ] ), new Set( [ 1, 2, 3 ] ), "set" )
  expect( /\d+/g, /\d+/g, "regexp" )
  expect( 123, 123, 'number' )
  expect( true, true, 'boolean', )
  expect( null, null, 'null', )
  expect( undefined, undefined, 'undefined', )
  expect( [], [], 'empty []', )
  expect( [ 1, 2, true ], [ 1, 2, true ], '基础类型[]', )
  expect( [ 1, 2, [ 1, 2, [ 4 ] ] ], [ 1, 2, [ 1, 2, [ 4 ] ] ], '嵌套类型[]', )
  expect( {}, {}, 'empty {}', )
  expect( { a: 2, b: true, c: [ 5 ], d: { e: 4 } }, { a: 2, b: true, c: [ 5 ], d: { e: 4 } }, '嵌套类型[]', )
}

