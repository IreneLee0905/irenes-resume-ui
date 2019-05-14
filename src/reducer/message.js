import {MessageEvent} from "../constant/event";

const message = (state = {
  show: false, messages: '', type: ''
}, action) => {
  switch (action.type) {
    case MessageEvent.SHOW_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
        show: true,
        type: action.msgType,
      });
    case MessageEvent.RESET_MESSAGE:
      return Object.assign({}, state, {
        message: '',
        show: false,
        type: '',
      });
    default:
      return state;
  }
};

export default message;