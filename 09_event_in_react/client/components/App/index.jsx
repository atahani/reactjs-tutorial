import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      text_d:'',
    };
    this.onChangedTx = this.onChangedTx.bind(this);
  }
  onChangedTx(e) {
    this.setState({
      text_d: e.target.value, 
    });
  }
  render () {
    const link = () => {
      if (this.state.text_d !== ''){
        return (
          <a
            href={`https://twitter.com/${this.state.text_d}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >{`@${this.state.text_d}`}</a>
        );
      }
      return false;
    };
    return (
      <div>
        <strong>{'Your Twitter @ '}</strong>
        <input onChange={this.onChangedTx} type="text" value={this.state.text_d}  />
        <br  />
        {link()}
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};
export default App;

