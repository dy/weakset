var WeakSet = require('WeakSet');
var assert = require('better-assert');

describe('WeakSet', function(){
	it('Constructor', function(){
		assert(new Set instanceof Set);
		assert(Set() instanceof Set);
		var s = Set([1,2]);
		assert(s.has(1));
		assert(s.has(2));
		assert(s.size, 2);
		if ("__proto__" in {}) {
		assert(Set().__proto__.isPrototypeOf(Set()));
		assert(Set().__proto__ === Set.prototype);
		}
	});

	it('add/get/delete', function(){
		var a = Set(), b = {}, c = function(){}, d = console;
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