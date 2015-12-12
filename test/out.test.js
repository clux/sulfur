var sulfur = require('..');
var smell = require('smell')();
var test = require('bandage');

test('output', function *(t) {
  sulfur.absorb(smell, 'out.test.js');
  smell.info('the following should be noted');
  smell.warn('this is ambiguous');
  smell.error('this is wrong');
  t.pass('smell absorbed');
});
