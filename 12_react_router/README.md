## Instruction

1. install `react-router`

```
yarn add react-router
```

2. add containers `App`, `Home`, `About`, `Items`, `Item`, `NotFound` 

3. add `routes.jsx` file

```
import React from 'react';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Items from './containers/Items';
import Item from './containers/Item';
import NotFound from './containers/NotFound';

const routes = () => (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}  />
      <Route path="about" component={About}  />
      <Route path="items" component={Items} />
      <Route path="items/:id" component={Item} />
      <Route path="*" component={NotFound}  />
    </Route>
  </Router> 
);
export default routes;
```

4. edit `./client/index.jsx` file

```
import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from './routes';

const run = () => {
  ReactDOM.render(
    <AppContainer>
      <Router
        history={browserHistory}
      >
        {routes()}
      </Router>
    </AppContainer>
      ,document.getElementById('app'));
};

run();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    run();
  });
}
``` 
5. edit `webpack.config.js` file, since we use webpack-dev-server 

```
devServer: {
    contentBase: './',
    historyApiFallback: true, // ADD IT
    port: 3030,
    hot: true,
    publicPath: '/',
}
```


