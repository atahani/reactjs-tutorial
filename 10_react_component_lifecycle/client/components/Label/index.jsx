/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
import React, { Component,PropTypes } from 'react';

class Label extends Component {

  constructor(props){
    super(props);
    this.state={
      state:false,
    };
    console.warn("Label ","constructor");
  }

  componentWillMount(){
    console.warn("Label ","componentWillMount");
  }

  componentDidMount(){
    console.warn("Label ","componentDidMount");
  }

  componentWillReceiveProps(nextProps){
    console.warn("Label ","componentWillReceiveProps");
    console.log("Label ",'nextProps is ',nextProps);
  }

  // this method should return bool
  // True > update component
  // False > don't update component
  shouldComponentUpdate(nextProps, nextState){
    console.warn("Label ","shouldComponentUpdate");
    console.log("Label ",'nextProps is ',nextProps);
    console.log("Label ",'nextState is ',nextState);
    if (nextProps.text !== this.props.text){
      return true;
    }
    return false;
  }

  componentWillUpdate(nextProps, nextState){
    console.warn("Label ","componentWillUpdate");
    console.log("Label ",'nextProps is ',nextProps);
    console.log("Label ",'nextState is ',nextState);
  }

  componentDidUpdate(prevProps, prevState){
    console.warn("Label ","componentDidUpdate");
    console.log("Label ",'prevProps is ',prevProps);
    console.log("Label ",'prevState is ',prevState);
  }

  componentWillUnmount(){
    console.warn("Label ","componentWillUnmount");
  }

  render(){
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {
  text:'',
};

export default Label;