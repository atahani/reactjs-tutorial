import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Feedback from '../../components/Feedback';
import { getStore } from '../../store';
import './style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  // handle when child get context
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  componentDidMount(){
    const store = getStore();
    store.dispatch({type:'SH_FEEDBACK',message:'Message from componentDidMount event'});
  }

  render () {
    return (
      <div className="viewport" style={{padding:20,height:200}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/items/5">Item Number 5</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {this.props.children}
        <Feedback  />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

App.defaultProps = {};

// define the childContextTypes
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App;