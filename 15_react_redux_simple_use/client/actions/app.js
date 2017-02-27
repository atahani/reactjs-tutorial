import {
  SH_FEEDBACK,
  DI_FEEDBACK,
} from '../constants/action_types';

export const showFeedback = (message='') => ({
  type: SH_FEEDBACK,
  message,
});

export const disappearFeedback = () => ({
  type:DI_FEEDBACK,
});