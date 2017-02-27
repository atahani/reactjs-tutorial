import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'; // ADD IT
import routes from './routes';
import { configureStore } from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const store = configureStore(); // ADD IT
const run = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router
          history={browserHistory}
        >
          {routes()}
        </Router>
      </Provider>
    </AppContainer>
      ,document.getElementById('app'));
};

run();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    run();
  });
}