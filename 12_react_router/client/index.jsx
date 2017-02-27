import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from './routes';
// import App from './components/App';

/*const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};*/

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

// render(App);
run();




if (module.hot) {
  module.hot.accept('./containers/App', () => {
    run();
  });
}