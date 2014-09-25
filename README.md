# WeakSet [![Build Status](https://travis-ci.org/dfcreative/weakset.svg?branch=master)](https://travis-ci.org/dfcreative/weakset)

A tiny leak-free obtrusive weakset polyfill.
Inspired by [polymer’s WeakMap](https://github.com/polymer/WeakMap) - exaclty the same approach is used.

Avoid putting _[sealed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)/[frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)/[preventedExtension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)_ objects.


## Use

`$ npm install weakset`
```js
var WeakSet = require('WeakSet');
```

or in-browser

```html
<script src="weakset.js"></script>
```


## License

MIT