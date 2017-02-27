import React, { PropTypes } from 'react';
import moment from 'moment';
import DateTime from '../DateTime';

// normal reactjs component
/*class App extends Component {
  render () {
    return (
      <div>
        <h3>
          {'ReactJS Initial release '}
          <DateTime 
            isFromNow 
            value={this.props.initialAt}
          />
        </h3>
      </div>
    );
  }
}*/

// state less since we don't have any state
const App = ({ initialAt }) => (
  <div>
    <h3>
      {'ReactJS Initial release '}
      <DateTime 
        isFromNow 
        value={initialAt}
      />
    </h3>
  </div>
);

// define props types to validate
App.propTypes = {
  initialAt: PropTypes.string,
};

// define default props if dose not set props for component
App.defaultProps = {
  initialAt: moment('20130301','YYYYMMDD').toISOString(),
};

export default App;