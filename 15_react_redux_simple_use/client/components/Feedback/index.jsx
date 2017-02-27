import React ,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { disappearFeedback } from '../../actions/app';

const Feedback = ({dispatch, isFeedbackOpen, feedbackMessage}) => (
  <Snackbar
    open={isFeedbackOpen}
    message={feedbackMessage}
    onRequestClose={() => dispatch(disappearFeedback())}
  />
);

Feedback.propTypes = {
  isFeedbackOpen: PropTypes.bool,
  feedbackMessage: PropTypes.string,
  dispatch: PropTypes.func,
};

Feedback.defaultProps = {
  isFeedbackOpen: false,
  feedbackMessage: ''
};

export default connect(
  state => ({
    isFeedbackOpen: state.app.show_feedback,
    feedbackMessage: state.app.feedback_message,
  })
)(Feedback);