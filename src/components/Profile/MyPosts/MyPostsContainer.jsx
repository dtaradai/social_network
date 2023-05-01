import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";


const MyPostsContainer = (props) => {
  const state = props.store.getState();
  const posts = state.profilePage.posts;
  const newPostText = state.profilePage.newPostText;

  const addPost = () => {
    props.store.dispatch(addPostCreator());
  }

  const onPostChange = (newPostText) => {
    props.store.dispatch(updateNewPostTextCreator(newPostText));
  }

  return (
    <MyPosts  posts={posts} 
              onPostChange={onPostChange} 
              addPost={addPost} 
              newPostText={newPostText}
    />
  )
}

export default MyPostsContainer;