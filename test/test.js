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
var helper = require('..');
var Template = require('template');
var handlebars;
var template;

describe('handlebars', function () {
  beforeEach(function () {
    handlebars = require('handlebars');
    handlebars.registerHelper('repeat', helper(handlebars));
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
    var actual = handlebars.compile('{{#repeat}}{{> button }}{{else}}Nothing :({{/repeat}}')(ctx);
    actual.should.eql('Nothing :(');
  });

  it('should allow private variables to be passed on the context:', function () {
    var ctx = {opts: {repeat: {whatever: 'Bar'}}};
    var actual = handlebars.compile('{{#repeat 1 opts}}{{@whatever}}{{/repeat}}')(ctx);
    actual.should.eql('<button>Bar</button>\n');
  });

  // it('should allow context to be passed:', function () {
  //   var ctx = {a: {b: {c: {text: 'DDD'}}}};
  //   handlebars.compile('{{repeat "button" a.b.c}}')(ctx).should.eql('Click me!DDDafter');
  // });

  // it('should work with other repeats:', function () {
  //   var ctx = {zzz: ' __ZZZ__ '};
  //   handlebars.compile('{{repeat "outter"}}')(ctx).should.eql('Click me!Click me! __ZZZ__ afterafter');
  // });
});

// describe('Template', function () {
//   beforeEach(function () {
//     template = new Template();
//     handlebars = require('engine-handlebars');

//     template.engine('hbs', handlebars);
//     template.helper('repeat', helper(handlebars));

//     template.repeat('button.hbs', 'Click me!{{text}}after');
//     template.data({text: ' __BAR__ '})
//   });

//   it('should work with Template:', function (done) {
//     template.render('{{repeat "button.hbs"}}', {ext: 'hbs'}, function (err, content) {
//       if (err) console.log(err)
//       content.should.eql('Click me! __BAR__ after');
//     });
//     done();
//   });
// });
