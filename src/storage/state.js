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
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State');
  },

  addPost() {
    const newPost = {
      id: 7,
      post: this._state.profilePage.newPostText,
      likes: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },

  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this._state)
  },

  // Используем для переопределения заглушки _callSubscriber на другую внешнюю функцию перерисовки визуальной части сайта
  subscribe(observer) {
    this._callSubscriber = observer; // pattern
  }
}


export default store;
window.store = store;