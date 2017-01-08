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
  var isNum = isNumber(n);

  if (!isNum) {
    options = n;
    n = 0;
  }

  options = options || {};
  var opts = merge({count: n}, options, options.hash);
  var ctx = this.context
    ? merge({}, this.context, opts)
    : merge({}, this, opts);

  if (opts.count) {
    return block(ctx);
  }

  return options.inverse(ctx);
};

function block(options) {
  var max = options.count;
  var str = '';

  var start = options.start || 0;

  for (var i = start; i < (max + start); i++) {
    var data = merge({index: i}, options);
    str += options.fn(options, {data: data});
  }
  return str;
}
