/*jshint unused:false*/
/**
 * {{repeat}}
 * https://github.com/helpers/handlebars-helper-repeat
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

// Node.js
var fs = require('fs');
var path = require('path');

// Test utils
var readFile = function() {
  var filepath = path.join.apply(null, arguments);
  return fs.readFileSync(filepath, 'utf8');
};
var actual = function(src) {
  return readFile(path.join(__dirname, 'actual', src));
};
var expected = function(src) {
  return readFile(path.join(__dirname, 'expected', src));
};


/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['repeat'] = {
  repeat: function(test) {
    test.expect(2);
    test.equal(actual('index.html'), expected('index.html'), 'Should be equal');
    test.equal(actual('repeat.html'), expected('repeat.html'), 'Should be equal');
    test.done();
  }
};