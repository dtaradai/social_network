const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, post: 'Post 1', likes: 15},
        {id: 2, post: 'Post 2', likes: 151},
        {id: 3, post: 'Post 3', likes: 18},
        {id: 4, post: 'Post 4', likes: 19},
        {id: 5, post: 'Post 5', likes: 65},
      ],
      newPostText: 'Enter text you post',
    },
    
    dialogsPage: {
      messages: [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'},
        {id: 4, message: 'Message 4'},
      ],
  
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Tanja'},
        {id: 4, name: 'Kolja'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Zoja'},
        {id: 7, name: 'Vitalik'},
      ],
  
      newMessageText: '',
      placeholder: 'Enter you message',
    },
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

  dispatch (action) {   // { type: 'addPost'}
    if (action.type === ADD_POST) {
      const newPost = {
        id: 7,
        post: this._state.profilePage.newPostText,
        likes: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      const newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state)
    }
  }
}

// ------------ start POST  ---------------
export const addPostCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreator = (newPostText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
  }
}
// ------------ end POST  ---------------

// ------------ start  Message ---------------
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (newMessageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText,
  }
}
// ------------ end MESSAGE  ---------------

export default store;
window.store = store;