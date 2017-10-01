/*!
 * handlebars-helper-repeat <https://github.com/helpers/handlebars-helper-repeat>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var Templates = require('templates');
var helper = require('./');
var handlebars;
var app;

describe('handlebars', function() {
  beforeEach(function() {
    handlebars = require('handlebars');
    handlebars.registerHelper('repeat', helper);
    handlebars.registerPartial('button', '<button>{{text}}</button>');
    handlebars.registerPartial('outter', '<button>{{> inner }}</button>');
    handlebars.registerPartial('inner', '<button>{{zzz}}</button>');
  });

  it('should repeat a block n times:', function() {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat 2}}{{> button }}\n{{/repeat}}')(ctx);
    assert.equal(actual, '<button>foo</button>\n<button>foo</button>\n');
  });

  it('should output the inverse when no number is specified:', function() {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    assert.equal(actual, 'Nothing :(');
  });

  it('should allow the count to be specified on the hash:', function() {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat count=2}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    assert.equal(actual, '<button>foo</button>\n<button>foo</button>\n');
  });

  it('should expose hash variables as private variables:', function() {
    var ctx = {text: 'foo'};
    var a = handlebars.compile('{{#repeat count=2}}{{@count}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    assert.equal(a, '2<button>foo</button>\n2<button>foo</button>\n');

    var b = handlebars.compile('{{#repeat count=2}}{{@index}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    assert.equal(b, '0<button>foo</button>\n1<button>foo</button>\n');
  });

  it('should start the index with the given number:', function() {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat count=2 start=17}}{{@index}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    assert.equal(actual, '17<button>foo</button>\n18<button>foo</button>\n');
  });

  it('should support nested repeats with block params', function() {
    var ctx = {sep: ', '};
    var template = '{{#repeat count=2 start=17 pace=2 as |outer_index|}}{{#repeat 2 as |inner_index|}}{{outer_index}} {{@index}} {{inner_index}}{{sep}}{{/repeat}}{{/repeat}}';
    var expected = '17 0 0, 17 1 1, 19 0 0, 19 1 1, ';
    var actual = handlebars.compile(template)(ctx);
    assert.equal(actual, expected);
  });
});

describe('Templates', function() {
  beforeEach(function() {
    app = new Templates();
    handlebars = require('engine-handlebars');
    app.create('partial', {viewType: ['partial']});
    app.create('page');

    app.engine('hbs', handlebars);
    app.helper('repeat', helper);

    app.partial('button.hbs', '<button>{{text}}</button>');
    app.page('fixture.hbs', '{{#repeat 2}}{{> button }}\n{{/repeat}}');
    app.data({text: 'foo'});
  });

  it('should work with Templates:', function(cb) {
    app.render('fixture.hbs', function(err, view) {
      if (err) return cb(err);
      assert.equal(view.contents.toString(), '<button>foo</button>\n<button>foo</button>\n');
      cb();
    });
  });
});
