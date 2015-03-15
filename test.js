/*!
 * handlebars-helper-repeat <https://github.com/helpers/handlebars-helper-repeat>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var helper = require('./');
var Template = require('template');
var handlebars;
var template;

describe('handlebars', function () {
  beforeEach(function () {
    handlebars = require('handlebars');

    handlebars.registerHelper('repeat', helper);
    handlebars.registerPartial('button', '<button>{{text}}</button>');
    handlebars.registerPartial('outter', '<button>{{> inner }}</button>');
    handlebars.registerPartial('inner', '<button>{{zzz}}</button>');
  });

  it('should repeat a block n times:', function () {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat 2}}{{> button }}\n{{/repeat}}')(ctx);
    actual.should.eql('<button>foo</button>\n<button>foo</button>\n');
  });

  it('should output the inverse when no number is specified:', function () {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    actual.should.eql('Nothing :(');
  });

  it('should allow the count to be specified on the hash:', function () {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat count=2}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    actual.should.eql('<button>foo</button>\n<button>foo</button>\n');
  });

  it('should expose hash variables as private variables:', function () {
    var ctx = {text: 'foo'};
    var a = handlebars.compile('{{#repeat count=2}}{{@count}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    a.should.eql('2<button>foo</button>\n2<button>foo</button>\n');

    var b = handlebars.compile('{{#repeat count=2}}{{@index}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    b.should.eql('0<button>foo</button>\n1<button>foo</button>\n');
  });

  it('should start the index with the given number:', function () {
    var ctx = {text: 'foo'};
    var actual = handlebars.compile('{{#repeat count=2 start=17}}{{@index}}{{> button }}\n{{else}}Nothing :({{/repeat}}')(ctx);
    actual.should.eql('17<button>foo</button>\n18<button>foo</button>\n');
  });
});

describe('Template', function () {
  beforeEach(function () {
    template = new Template();
    handlebars = require('engine-handlebars');

    template.engine('hbs', handlebars);
    template.helper('repeat', helper);

    template.partial('button.hbs', '<button>{{text}}</button>');
    template.page('fixture.hbs', '{{#repeat 2}}{{> button }}\n{{/repeat}}');
    template.data({text: 'foo'})
  });

  it('should work with Template:', function (done) {
    template.render('fixture.hbs', function (err, content) {
      if (err) console.log(err)
      content.should.eql('<button>foo</button>\n<button>foo</button>\n');
    });
    done();
  });
});
