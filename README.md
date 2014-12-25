# WeakSet [![Build Status](https://travis-ci.org/dfcreative/weakset.svg?branch=master)](https://travis-ci.org/dfcreative/weakset) <a href="UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>

A tiny leak-free weakset polyfill. _276 bytes gzipped_.<br/>
Implements [polymer’s WeakMap](https://github.com/polymer/WeakMap) approach to store keys.


## Use

`$ npm install weakset`
```js
var WeakSet = require('weakset');
```

or in-browser

```html
<script src="weakset.js"></script>
```