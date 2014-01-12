# Usage with Assemble

> Visit [assemble.io](http://assemble.io) to learn more about Assemble


## custom YAML front-matter properties

Example usage with custom properties:

```handlebars
---
number:
  foo: 25
  bar: 50
---

{{#repeat number.foo}}
   {{> foo-button }}
{{/repeat}}


{{#repeat number.bar}}
   {{> bar-button }}
{{/repeat}}
```

## JSON/YAML files

Or use JSON/YAML files, for example in `number.json` we have:

```json
{
  "foo": 50,
  "bar": 100
}
```

```handlebars
{{#repeat number.foo}}
   {{> foo-button }}
{{/repeat}}


{{#repeat number.bar}}
   {{> bar-button }}
{{/repeat}}
```

Set the following in the Assemble options:

```javascript
assemble: {
  options: {
    data: ['numbers.json']
  },
  files: {
    'dest/': ['src/*.hbs']
  }
}
```

## YAML front-matter with Lo-Dash templates

```handlebars
---
number:
  foo: <%= number.foo %>
  bar: <%= number.bar %>
---

{{#repeat number.foo}}
   {{> foo-button }}
{{/repeat}}


{{#repeat number.bar}}
   {{> bar-button }}
{{/repeat}}
```

In the Assemble task or target options:

```javascript
assemble: {
  options: {
    number: {
      foo: 10,
      bar: 5
    }
  },
  files: {
    'dest/': ['src/*.hbs']
  }
}
```