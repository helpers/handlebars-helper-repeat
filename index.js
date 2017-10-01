/*!
 * handlebars-helper-repeat <https://github.com/helpers/handlebars-helper-repeat>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert, Sergey Homa (BjornMelgaard).
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function repeat() {
  const args_length = arguments.length;
  if (args_length > 2) throw new Error(`Expected 0, 1 or 2 arguments, but got ${args_length}`);

  var options = arguments[args_length - 1];

  var count = args_length === 1 ? (options.hash.count || 0) : arguments[0];
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

  do {
    var data = {
      index,
      count,
      start,
      pace,
      first: index === start,
      last: index >= max - pace
    };
    var blockParams = [index, data];
    str += fn(_this, { data, blockParams });
    index += data.pace;
  } while (index < max);

  return str;
}
