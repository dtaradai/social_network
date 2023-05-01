const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
    { id: 1, post: 'Post 1', likes: 15 },
    { id: 2, post: 'Post 2', likes: 151 },
    { id: 3, post: 'Post 3', likes: 18 },
    { id: 4, post: 'Post 4', likes: 19 },
    { id: 5, post: 'Post 5', likes: 65 },
  ],
  newPostText: 'Enter text you post',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 7,
        post: state.newPostText,
        likes: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state

    default: 
      return state
  }
}

export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostTextCreator = (newPostText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
  }
}

export default profileReducer;