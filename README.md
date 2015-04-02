# Sulfur
[![npm status](http://img.shields.io/npm/v/sulfur.svg)](https://www.npmjs.org/package/sulfur)
[![build status](https://secure.travis-ci.org/clux/sulfur.svg)](http://travis-ci.org/clux/sulfur)
[![dependency status](https://david-dm.org/clux/sulfur.svg)](https://david-dm.org/clux/sulfur)
[![coverage status](http://img.shields.io/coveralls/clux/sulfur.svg)](https://coveralls.io/r/clux/sulfur)

A rudimentary and unconfigurable application logger that can only absorb logs from the event emitter module [smell](https://npmjs.org/package/smell).

## Format
Output format is styled after clang's compile output. The smell events map onto the basic `console` functions:

```js
var fn = {
  info: console.log,
  warn: console.warn,
  err: console.error
}[eventName];
```

Consequently, `warn` and `err` events go through `stderr`.

## Usage
Require sulfur in your application, then absorb the smells exposed from libraries:

```js
var sulfur = require('sulfur');
var smell = require('smell')(); // suppose this was exposed through some-module
sulfur.absorb(smell, 'some-module');

smell.warn('warning message'); // will log through sulfur
```

## License
MIT-Licensed. See LICENSE file for details.
