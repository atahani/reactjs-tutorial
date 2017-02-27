import React, { PropTypes } from 'react';
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

const About = ({dispatch}) => (
  <div>
    <h2>About Page</h2>
    <div style={s.m}>
      <RaisedButton
        onTouchTap={() => dispatch(showFeedback("Bye from About Page :-)"))}
        label="Click Me"
      />
    </div>
  </div>
);

About.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(About);