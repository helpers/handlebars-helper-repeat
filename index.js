/*!
 * handlebars-helper-repeat <https://github.com/helpers/handlebars-helper-repeat>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');
var merge = require('mixin-deep');

module.exports = function repeat(n, options) {
  /* jshint validthis: true */
  var hasNumber = isNumber(n);
  var context = {};
  var self = this;

  if (!hasNumber) {
    options = n;
  }

  if (self && self.context) {
    merge(self, self.context);
  }

  if (options.hasOwnProperty('hash')) {
    merge(options, options.hash);
  }

  if (options.count) {
    n = options.count;
    hasNumber = true;
  }

  merge(options, self, context);
  if (hasNumber) {
    return block(options);
  } else {
    return options.inverse(options);
  }

  function block(opts) {
    opts = opts || {};
    var str = '';

    var hash = opts.hash || {};
    hash.start = hash.start || 0;

    for (var i = hash.start; i < n + hash.start; i++) {
      hash.index = i;

      str += opts.fn(opts, {data: hash});
    }
    return str;
  }
}
