import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://phonoteka.org/uploads/posts/2021-05/1620727330_24-phonoteka_org-p-foni-na-avatarku-v-stendov-31.jpg" />
      {props.post}
      <div>
        <span>Likes: {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;
