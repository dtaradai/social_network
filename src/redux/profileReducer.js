const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
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