## Instruction

1. install `style-loader` and `css-loader`

```
yarn add style-loader css-loader --dev
```

2. edit `webpack.config.js` file add rule in module

```
{
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    'style-loader',
    'css-loader'
  ]
}
``` 
