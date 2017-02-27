import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
//NOTE: just for test redux
import store from './store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component  />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}