import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Post 1', likes: 15 },
        { id: 2, post: 'Post 2', likes: 151 },
        { id: 3, post: 'Post 3', likes: 18 },
        { id: 4, post: 'Post 4', likes: 19 },
        { id: 5, post: 'Post 5', likes: 65 },
      ],
      newPostText: 'Enter text you post',
    },

    dialogsPage: {
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
    },

    sidebar: {

    }
  },

  // Заглушка, используется для подстановки в нее требуемой функции
  _callSubscriber() {
    console.log('State');
  },

  getState() {
    return this._state;
  },

  // Используем для переопределения заглушки _callSubscriber на другую внешнюю функцию перерисовки визуальной части сайта
  subscribe(observer) {
    this._callSubscriber = observer; // pattern
  },

  dispatch(action) {   // { type: 'addPost'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state)
  }
}

export default store;
window.store = store;