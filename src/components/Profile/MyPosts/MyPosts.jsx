import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  
  const posts = [
    {id: 1, post: 'Post 1', likes: 15},
    {id: 2, post: 'Post 2', likes: 151},
    {id: 3, post: 'Post 3', likes: 18},
    {id: 4, post: 'Post 4', likes: 19},
    {id: 5, post: 'Post 5', likes: 65},
  ];

  let postsElements = posts.map( post => <Post id={post.id} post={post.post} likes={post.likes} /> );

  return (
    <div className={s.posts__block}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;