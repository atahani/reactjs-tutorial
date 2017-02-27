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
