var WeakSet = require('../index');
var assert = require('better-assert');

describe('WeakSet', function(){
	it('Constructor', function(){
		assert(new WeakSet instanceof WeakSet);
		if ("__proto__" in {}) {
			assert((new WeakSet).__proto__.isPrototypeOf((new WeakSet)));
			assert((new WeakSet).__proto__ === WeakSet.prototype);
		}
	});

	it('add/get/delete', function(){
		var a = new WeakSet, b = {}, c = function(){}, d = console;
		var set = new WeakSet;

		set.add(a).add(b).add(c).add(d);

		assert(set.has(a));
		assert(set.has(b));
		assert(set.has(c));
		assert(set.has(d));

		set.delete(d);
		set.delete(c);
		set.delete(b);
		set.delete(a);

		assert(!set.has(a));
		assert(!set.has(b));
		assert(!set.has(c));
		assert(!set.has(d));

		assert(set.delete(a) === false);
		set.add(a);
		assert(set.delete(a) === true);
	});
})