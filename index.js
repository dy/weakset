var counter = Date.now() % 1e9;

/**
 * @constructor
 */
var WeakSet = function() {
  this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
};


var proto = WeakSet.prototype;

proto['add'] = function(key, value) {
  var name = this.name;
  if (!key[name]) Object.defineProperty(key, name, {value: true, writable: true});
  return this;
};
proto['delete'] = function(key) {
  if (!key[this.name]) return false;
  key[this.name] = undefined;
  return true;
};
proto['has'] = function(key) {
  return !!key[this.name];
};


/**
 * @module WeakSet
 */
module.exports = WeakSet;