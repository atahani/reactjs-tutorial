import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render () {
    return (
      <div className="viewport" style={{textAlign:'center',color:'red',height:200}}>
        <h2>Hello World</h2>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;