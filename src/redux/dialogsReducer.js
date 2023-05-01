const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 7,
        message: state.newMessageText,
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state

    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (newMessageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText,
  }
}

export default dialogsReducer;