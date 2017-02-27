/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
import React, { Component } from 'react';
import Label from '../Label';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      state:false,
      showLabel: false,
      labelText: 'label text',
    };
    console.warn("constructor");
  }

  componentWillMount(){
    console.warn("componentWillMount");
  }

  componentDidMount(){
    console.warn("componentDidMount");
  }

  componentWillReceiveProps(nextProps){
    console.warn("componentWillReceiveProps");
    console.log('nextProps is ',nextProps);
  }

  // this method should return bool
  // True > update component
  // False > don't update component
  shouldComponentUpdate(nextProps, nextState){
    console.warn("shouldComponentUpdate");
    console.log('nextProps is ',nextProps);
    console.log('nextState is ',nextState);
    // if (nextState.state !== this.state.state){
    //   return true;
    // }
    // return false;
    // if you don't write this function return true
    // return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.warn("componentWillUpdate");
    console.log('nextProps is ',nextProps);
    console.log('nextState is ',nextState);
  }

  componentDidUpdate(prevProps, prevState){
    console.warn("componentDidUpdate");
    console.log('prevProps is ',prevProps);
    console.log('prevState is ',prevState);
  }

  componentWillUnmount(){
    console.warn("componentWillUnmount");
  }

  render () {
    console.warn("render");
    const l = () => {
      if (this.state.showLabel){
        return (
          <div>
            <Label text={this.state.labelText}  />
            <br  />
            <br  />
            <button onClick={() => this.setState({labelText:'New Label Text'})}>Change Label Props</button>    
          </div>
        );
      }
      return false;
    };
    return (
      <div>
        <button onClick={() => this.setState({state:true})}>Update State</button>
        <br  />
        <br  />
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        <br  />
        <br />
        <button onClick={() => this.setState({showLabel:!this.state.showLabel})}>Show/Hide Label</button>
        <br  />
        <br  />
        {l()}
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;