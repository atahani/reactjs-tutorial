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

6. install (https://github.com/babel/babel-loader)[babel plugin]

```
yarn add babel-loader babel-core babel-preset-es2015 webpack --dev
```

7. install webpack-dev-server

```
yarn add webpack-dev-server --dev
```

8. edit webpack.config.js file add devServer

```
devServer: {
      contentBase: './',
      port: 3030,
    }
```

9. in package.json file edit start scripts

```
"start": "webpack-dev-server",
```

10. run it

```
yarn start
```

