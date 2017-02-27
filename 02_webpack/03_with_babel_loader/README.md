## Instruction

1. initialize yarn and install webpack locally

```
yarn init -y
yarn add webpack --dev
```

2. the webpack installed on ./node_modules/.bin/webpack

```
./node_modules/.bin/webpack --help
```

3. for example we use from `lodash` module install it

```
yarn add lodash
```

4. create file on `client/index.js`

```
import join from 'lodash/join';

const HelloWebpack = () => {
  const element =  document.createElement('div');
  element.innerHTML = join(['hello','webpack'],' ');
  document.body.appendChild(element);
}

HelloWebpack();
```

5. create `index.html`

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

6. install (https://github.com/babel/babel-loader)[babel-loader]

```
yarn add babel-loader babel-core babel-preset-es2015 --dev
```

7. add .babelrc file

```
{
  "presets": [
    // webpack understands the native import syntax, and uses it for tree shaking
    ["es2015", {"modules": false}]
  ],
  "plugins": []
}
```

7. run it

```
yarn start
```

