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