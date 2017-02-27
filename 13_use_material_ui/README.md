## Instruction

1.install `material-ui` and `react-tap-event-plugin`

```
yarn add material-ui react-tap-event-plugin
```
[material-ui](http://www.material-ui.com)

2.add this code to `./client/index.jsx`

[more info](http://www.material-ui.com/#/get-started/installation)

```
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
```

3.add MuiTheme to parent App container as childContextTypes see `./client/container/App/index.jsx` file

[more info](http://www.material-ui.com/#/customization/themes)

```
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// add it to App component
// handle when child get context
getChildContext() {
  return { muiTheme: getMuiTheme() };
}

// define the childContextTypes
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

```

4.add RaisedButton and Snackbar to Home Page

```
import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const s ={
  m:{
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
  }
};

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }
  render(){
    return (
      <div>
        <h2>Home Page</h2>
        <div style={s.m}>
          <RaisedButton
            onTouchTap={() => this.setState({open:true})}
            label="Click Me"
          />
        </div>
        
        <Snackbar
          open={this.state.open}
          message="WOW :-)"
          autoHideDuration={2000}
          onRequestClose={() => this.setState({open:false})}
        />
      </div>
    );
  }
}

export default Home;
```
