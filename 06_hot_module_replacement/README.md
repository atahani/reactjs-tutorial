## Instruction

1. install `react` and `react-dom`

```
yarn add react react-dom --save
```

2. install `babel-preset-react`

```
yarn add babel-preset-react --dev
```

3. add `react` as presets in .babelrc file

4. change App component

```
import React from 'react';

const App = () => (
  <div>Hello World</div>
);

export default App;
```

5. add react-hot-loader module

more information on [https://github.com/gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader) or [https://webpack.js.org/guides/hmr-react/](https://webpack.js.org/guides/hmr-react/)

```
yarn add react-hot-loader@next --dev
```

6. edit webconfig.config.js file

7. add `react-hot-loader/babel` plugins to `.babelrc`

8. change in `client/index.jsx` file