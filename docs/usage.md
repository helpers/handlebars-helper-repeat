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