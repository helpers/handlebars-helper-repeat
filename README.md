# {{repeat}} [![NPM version](https://badge.fury.io/js/helper-repeat.png)](http://badge.fury.io/js/helper-repeat)

> Repeat the encapsulated block of content _n_ times.

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i helper-repeat --save-dev
```

## Usage

```handlebars
{{#repeat '10'}}
   {{> button }}
{{/repeat}}
```


## Usage in Assemble

In your Gruntfile, simply add `helper-repeat` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      helpers: ['helper-repeat']
    }
    ...
  }
});
```

With that completed, you may now being using the `{{repeat}}` helper in your Assemble project.


## Options

### task options
Options can be set in your Gruntfile, in a custom property in the Assemble task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      number: {
        foo: 10,
        bar: 5
      }
    }
    ...
  }
});
```

Example usage with custom properties:

```handlebars
---
number:
  foo: <%= number.foo >
  bar: <%= number.bar >
---

{{#repeat number.foo}}
   {{> foo-button }}
{{/repeat}}


{{#repeat number.bar}}
   {{> bar-button }}
{{/repeat}}
```



## Author

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)


## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.