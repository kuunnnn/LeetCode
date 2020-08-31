/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.length = 0;
  this.minStack = [Infinity]
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function ( x ) {
  this.stack.push( x )
  this.minStack.push( Math.min(this.minStack[this.length],x) )
  this.length++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minStack.pop()
  this.length--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[ this.length-1  ]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[ this.length ]
};
