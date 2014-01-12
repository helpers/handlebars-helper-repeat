/**
 * Handlebars Helper: {{repeat}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

var digits = require('digits');

module.exports.register = function(Handlebars, options) {
  options = options || {};

  /**
   * Repeat the content inside a Handlebars block expression
   * @param  {Number} n     Number of times to duplicate content.
   * @param  {Object} opts  Options object
   * @return {String}       Content repeated n times
   *
   * @example:
   *    {{#repeat '10'}}
   *      <div id="{{@index}}">
   *        {{> button }}
   *      </div>
   *    {{/repeat}}
   */
  Handlebars.registerHelper('repeat', function(n, options) {
    options = options || {};
    var _data = {};
    if (options._data) {
      _data = Handlebars.createFrame(options._data);
    }

    var content = '';
    var count = n - 1;
    for (var i = 0; i <= count; i++) {
      _data = {
        index: digits.pad((i + 1), {auto: n})
      };
      content += options.fn(this, {data: _data});
    }
    return new Handlebars.SafeString(content);
  });
};

