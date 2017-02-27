import { createStore,applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reducers from './reducers';

let currentStore = null;
const middlewares = [];

middlewares.push(reduxLogger());

export const configureStore = (initialState={}) => {
  currentStore = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );
  return currentStore;
};

export const getStore = () => currentStore;