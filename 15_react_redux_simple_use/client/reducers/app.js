import {
  SH_FEEDBACK,
  DI_FEEDBACK,
} from '../constants/action_types';

export default function appReducer(state={},action){
  switch(action.type){
    case SH_FEEDBACK:
      return Object.assign({},state,{
        show_feedback: true,
        feedback_message: action.message,
      });
    case DI_FEEDBACK:
      return Object.assign({},state,{
        show_feedback: false,
        feedback_message: '',
      });
    default:
      return state;
  }
}