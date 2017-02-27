## Instruction

1.change App component

```
import React from 'react';

const App = () => (
  <div>Hello World</div>
);

export default App;
```

2.add react-hot-loader module

more information on [https://github.com/gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader) or [https://webpack.js.org/guides/hmr-react/](https://webpack.js.org/guides/hmr-react/)

```
yarn add react-hot-loader@next --dev
```

3.edit webconfig.config.js file

4.add `react-hot-loader/babel` plugins to `.babelrc`

5.change in `client/index.jsx` file