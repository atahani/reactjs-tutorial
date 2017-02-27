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

/*class Home extends Component {
  render(){
    return (
      <div>
        <h2>Home Page</h2>
        <div style={s.m}>
          <RaisedButton
            onTouchTap={() => this.props.dispatch(showFeedback("Hi from Home Page"))}
            label="Click Me"
          />
        </div>
      </div>
    );
  }
}*/

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