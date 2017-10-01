/*!
 * handlebars-helper-repeat <https://github.com/helpers/handlebars-helper-repeat>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function repeat() {
  var options = arguments[arguments.length - 1];

  var count = arguments.length === 1 ? options.hash.count : arguments[0];
  var start = options.hash.start || 0;
  var pace = options.hash.pace || 1;

  var data = { count, start, pace };

  if (data.count > 0) {
    return block(data, this, options.fn);
  }

  return options.inverse(this);
};

function block({ count, start, pace }, _this, fn) {
  var str = '';
  var max = count * pace + start;

  var index = start;

  while (index < max) {
    var data = { index, count, start, pace };
    var blockParams = [index, count, start, pace];
    str += fn(_this, { data, blockParams });
    index += data.pace;
  }

  return str;
}
