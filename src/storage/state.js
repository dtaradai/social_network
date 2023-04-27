import { renderEntireTree } from "../render";

const state ={
  profilePage: {
    posts: [
      {id: 1, post: 'Post 1', likes: 15},
      {id: 2, post: 'Post 2', likes: 151},
      {id: 3, post: 'Post 3', likes: 18},
      {id: 4, post: 'Post 4', likes: 19},
      {id: 5, post: 'Post 5', likes: 65},
    ],
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
}

export const addPost = (postMessage) => {
  const newPost = {
    id: 7,
    post: postMessage,
    likes: 0
  }

  state.profilePage.posts.push(newPost);
  renderEntireTree(state)
}

export default state;