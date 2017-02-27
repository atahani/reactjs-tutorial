## Instruction

1.install `redux` and `react-redux` and `redux-logger`

```
yarn add redux react-redux redux-logger
```
[more info](https://github.com/reactjs/react-redux)

2.write action types `./client/constants/action_types.js`

```
export const SH_FEEDBACK = 'SH_FEEDBACK';
export const DI_FEEDBACK = 'DI_FEEDBACK';
```

3.write two action `./client/actions/app.js` 

```
import {
  SH_FEEDBACK,
  DI_FEEDBACK,
} from '../constants/action_types';

export const showFeedback = (message='') => ({
  type: SH_FEEDBACK,
  message,
});

export const disappearFeedback = () => ({
  type:DI_FEEDBACK,
});
```

4.create app reducer `./client/reducers/app.js`

```
import {
  SH_FEEDBACK,
  DI_FEEDBACK,
} from '../constants/action_types';

export default function appReducer(state={},action){
  switch(action.type){
    case SH_FEEDBACK:
      return Object.assign({},state,{
        show_feedback: true,
        feedback_message: action.message,
      });
    case DI_FEEDBACK:
      return Object.assign({},state,{
        show_feedback: false,
        feedback_message: '',
      });
    default:
      return state;
  }
}
```

5.combine Reducers `./client/reducers/index.js`

```
import { combineReducers } from 'redux';
import app from './app';

const rootReducer = combineReducers({
  app,
  // you can add many reducer
  // user 
});

export default rootReducer;
```

6.configure Store `./client/store.js`

```
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
```

7.edit `./client/index.js`

```
//NOTE: see ./client/index.js file

import { Provider } from 'react-redux';

const store = configureStore();
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

```

8.create Feedback component `./client/components/Feedback/index.jsx`

```
import React ,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { disappearFeedback } from '../../actions/app';

const Feedback = ({dispatch, isFeedbackOpen, feedbackMessage}) => (
  <Snackbar
    open={isFeedbackOpen}
    message={feedbackMessage}
    onRequestClose={() => dispatch(disappearFeedback())}
  />
);

Feedback.propTypes = {
  isFeedbackOpen: PropTypes.bool,
  feedbackMessage: PropTypes.string,
  dispatch: PropTypes.func,
};

Feedback.defaultProps = {
  isFeedbackOpen: false,
  feedbackMessage: ''
};

export default connect(
  state => ({
    isFeedbackOpen: state.app.show_feedback,
    feedbackMessage: state.app.feedback_message,
  })
)(Feedback);
```

9.connect Home container to Redux and dispatch action `./client/containers/Home/index.jsx`

```
import React,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { showFeedback } from '../../actions/app';

const s ={
  m:{
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
  }
};

const Home = ({dispatch}) => (
  <div>
    <h2>Home Page</h2>
    <div style={s.m}>
      <RaisedButton
        onTouchTap={() => dispatch(showFeedback("Hi from Home Page"))}
        label="Click Me"
      />
    </div>
  </div>
  );

Home.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(Home);
``` 


