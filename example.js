const handlebars = require('handlebars');

// 2. register the helper, name it whatever you want
handlebars.registerHelper('repeat', require('./'));

// 3. register some partials
handlebars.registerPartial('button', '<button>{{.}}</button>');

// 4. use in templates
const fn = handlebars.compile('{{#repeat 2}}{{> button }}{{/repeat}}');

console.log(fn('Click me!'));
