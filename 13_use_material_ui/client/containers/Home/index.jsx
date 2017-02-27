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