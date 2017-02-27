## Instruction

1.initialize yarn and install webpack locally

```
yarn init -y
yarn add webpack --dev
```

2.the webpack installed on ./node_modules/.bin/webpack

```
./node_modules/.bin/webpack --help
```

3.for example we use from `lodash` module install it

```
yarn add lodash
```

4.create file on `client/index.js`

```
var _ = require ('lodash');

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

5.create `index.html`

```
<html>
  <head>
    <title>webpack 2 demo</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

6.run webpack to bundle js file

```
./node_modules/.bin/webpack client/index.js dist/bundle.js
```