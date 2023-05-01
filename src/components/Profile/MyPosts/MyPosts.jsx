import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/state";

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map( post => <Post id={post.id} post={post.post} likes={post.likes} /> );
  const newPostElement = React.createRef();
  
  const addPost = () => {
    props.dispatch(addPostCreator());
  }

  const onPostChange = () => {
    const newPostText = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(newPostText));
  }

  return (
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    ref={newPostElement} 
                    value={props.profilePage.newPostText}     
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;