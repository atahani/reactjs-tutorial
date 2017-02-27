## Instruction

1.add `./client/components/DateTime/index.jsx`

```
import React, { PropTypes } from 'react';
import moment from 'moment';

const DateTime = ({ locale, value, isFromNow }) => {
  if (!value) {
    return false;
  }
  moment.locale(locale);
  if (isFromNow) {
    return <span>{moment(value).fromNow()}</span>;
  }

  return <span>{moment(value)}</span>;
};

// state less since we don't have any state
DateTime.propTypes = {
  locale: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isFromNow: PropTypes.bool.isRequired,
};

// define default props if dose not set props for component
DateTime.defaultProps = {
  locale: 'en',
  isFromNow: false,
};

export default DateTime;

```

2.edit `./client/components/App/index.jsx`

```
import React, { PropTypes } from 'react';
import moment from 'moment';
import DateTime from '../DateTime';

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
```