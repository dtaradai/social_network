import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes} key={post.id} />);
  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const newPostText = newPostElement.current.value;
    props.onPostChange(newPostText);
  }

  return (
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;