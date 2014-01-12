# {{repeat}} [![NPM version](https://badge.fury.io/js/handlebars-helper-repeat.png)](http://badge.fury.io/js/handlebars-helper-repeat) 

> Repeat the encapsulated block of content _n_ times.

If you find a bug or have a feature request, [please create an issue](https://github.com/helpers/handlebars-helper-repeat/issues).

## Installation
Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-repeat`.

### Register the helper

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "handlebars-helper-repeat": "*"
  },
  "keywords": [
    "handlebars-helper-repeat"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-repeat' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-repeat', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```


## Usage Examples
```handlebars
{{#repeat 10}}
   {{> button }}
{{/repeat}}
```
Using `@index` in templates:

```handlebars
{{#repeat 500}}
<div id="example-{{@index}}">
  <button>Button {{@index}}</button>
</div>
{{/repeat}}
```

[Example usage with Assemble](./EXAMPLES.md)


## Related projects
Besides the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) library, which includes more than 120 helpers, Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.

+ [handlebars-helper-aggregate](https://github.com/helpers/handlebars-helper-aggregate): {{aggregate}} handlebars helper. inlines content from multiple files optionally using wildcard (globbing/minimatch) patterns. uses YAML front matter as context for each file. optionally pass in a sorting function. 
+ [handlebars-helper-autolink](https://github.com/helpers/handlebars-helper-autolink): {{autolink}} handlebars helper. Generate relative links from the "current page" to other dest pages. 
+ [handlebars-helper-br](https://github.com/helpers/handlebars-helper-br): {{br}} Handlebars helper. Adds `<br>` tags to generated HTML. Great for prototyping. 
+ [handlebars-helper-compose](https://github.com/helpers/handlebars-helper-compose): {{compose}} handlebars helper. Similar to {{aggregate}}, but this is a block expression helper that inlines content from multiple files differently, extracting YAML front matter to pass to context for each file. Optionally use wildcard (globbing/minimatch) patterns. Accepts compare function as 3rd parameter for sorting inlined files. 
+ [handlebars-helper-condense](https://github.com/helpers/handlebars-helper-condense): Remove extra newlines from HTML content. 
+ [handlebars-helper-disqus](https://github.com/helpers/handlebars-helper-disqus): {{disqus}} Handlebars helper. Simplifies adding [Disqus](https://disqus.com/) comments to your site. 
+ [handlebars-helper-eachitems](https://github.com/helpers/handlebars-helper-eachitems): {{eachItems}} handlebars helper. 
+ [handlebars-helper-ghbtns](https://github.com/helpers/handlebars-helper-ghbtns): {{ghbtn}} handlebars helper. Add github buttons (http://ghbtns.com) to your site. 
+ [handlebars-helper-include](https://github.com/helpers/handlebars-helper-include): Handlebars helper, alternative to built-in partials. Similar to handlebars-helper-partial, but this helper will allow wildcard (glob) patterns. Like Assemble itself, this helper will automatically determine the correct context to use, or a context may be explicitly passed in as a second parameter. 
+ [handlebars-helper-isActive](https://github.com/helpers/handlebars-helper-isActive): {{isactive}} handlebars helper. Adds an 'active' class to the 'current page'. Class can be customized. 
+ [handlebars-helper-jade](https://github.com/helpers/handlebars-helper-jade): {{jade}} handlebars helper, for converting basic Jade templates to HTML.  
+ [handlebars-helper-less](https://github.com/helpers/handlebars-helper-less): {{less}} handlebars helper. This helper allows you to use LESS inside style tags in your HTML. By default, the resulting CSS will be rendered inside the `<style>...</style>` tags of the rendered HTML, but you may alternatively define a destination path using the `dest` hash option of the helper. 
+ [handlebars-helper-lorem](https://github.com/helpers/handlebars-helper-lorem): {{lorem}} handlebars helper, for generating lorem lorem placeholder text. 
+ [handlebars-helper-minify](https://github.com/helpers/handlebars-helper-minify): {{minify}} handlebars helper, for minification of HTML with html-minifier. 
+ [handlebars-helper-moment](https://github.com/helpers/handlebars-helper-moment): {{moment}} handlebars helper. Combines the powers of Assemble, Handlebars.js and Moment.js into a great helper to master time. 
+ [handlebars-helper-not](https://github.com/helpers/handlebars-helper-not): {{not}} handlebars helper. Conditionally render a block if the condition is false. This block helper is really just a semantic alternative to {{isnt}} 
+ [handlebars-helper-paginate](https://github.com/helpers/handlebars-helper-paginate): {{paginate}} handlebars helper. Made for Assemble, the static site generator for Node.js, Grunt.js and Yeoman. 
+ [handlebars-helper-partial](https://github.com/helpers/handlebars-helper-partial): Handlebars helper, alternative to built-in partials. Like Assemble itself, this helper will automatically determine the correct context to use, or a context may be explicitly passed in as a second parameter. 
+ [handlebars-helper-pkg](https://github.com/helpers/handlebars-helper-pkg): {{pkg}} handlebars helper, for retrieving a value from your project's package.json 
+ [handlebars-helper-post](https://github.com/helpers/handlebars-helper-post): {{post}} handlebars helper, for including a post, or a list of posts. 
+ [handlebars-helper-prettify](https://github.com/helpers/handlebars-helper-prettify): {{prettify}} handlebars helper, for formatting ("beautifying") HTML, CSS and JavaScript.      
+ [handlebars-helper-process](https://github.com/helpers/handlebars-helper-process): {{process}} handlebars helper, for processing raw templates in included content, with the correct context 
+ [handlebars-helper-rel](https://github.com/helpers/handlebars-helper-rel): Handlebars helper for generating a relative link from the current page to the specified page. 
+ [handlebars-helper-slugify](https://github.com/helpers/handlebars-helper-slugify): Convert strings into URL slugs. 
+ [handlebars-helper-track](https://github.com/helpers/handlebars-helper-track): {{track}} handlebars helper. Simplify the process of adding Google analytics tracking codes to your web projects. 
+ [handlebars-helper-twitter](https://github.com/helpers/handlebars-helper-twitter): Add {{tweet}} and {{follow}} buttons using handlebars helpers. 
+ [handlebars-helper-uml](https://github.com/helpers/handlebars-helper-uml): Embed UML diagrams in your handlebars template using www.websequencediagrams.com 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][], and build the documentation with [grunt-readme](https://github.com/assemble/grunt-readme).



## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## Release History

 * 2014-01-12   v0.2.0   Adds {{@index}} to context.  Adds more documentation.  Adds Digits as a dependency, for padding generated numbers (@index).  Adds basic tests and fixtures. 
 * 2013-09-16   v0.1.0   First commmit.


## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Sunday, January 12, 2014._

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html
