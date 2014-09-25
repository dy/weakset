/**
 * @module WeakSet
 *
 * A tiny leak-free polymer’s weakmap inspired weakset.
 */

var counter = Date.now() % 1e9;

var WeakSet = function() {
  this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
};

WeakSet.prototype = {
  add: function(key, value) {
    var name = this.name;
    if (!key[name]) Object.defineProperty(key, name, {value: true, writable: true});
    return this;
  },
  delete: function(key) {
    if (!key[this.name]) return false;
    key[this.name] = undefined;
    return true;
  },
  has: function(key) {
    return key[this.name];
  }
};

module.exports = WeakSet;