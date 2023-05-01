const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
  messages: [
    { id: 1, message: 'Message 1' },
    { id: 2, message: 'Message 2' },
    { id: 3, message: 'Message 3' },
    { id: 4, message: 'Message 4' },
  ],

  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Tanja' },
    { id: 4, name: 'Kolja' },
    { id: 5, name: 'Sveta' },
    { id: 6, name: 'Zoja' },
    { id: 7, name: 'Vitalik' },
  ],

  newMessageText: '',
  placeholder: 'Enter you message',
}

const dialogsReducer = (state = initialState, action) => {
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