import React from "react";
import s from './Users.module.css';
import photoDefault from './../../assets/images/photoDefault.jpg'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.count);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={s.pagination}>
      {pages.map(page => {
        return <span className={(props.curentPage === page ? s.selectedPage : '') + ' ' + s.pagination__item}
          onClick={() => { props.onPageChanged(page) }} key={page}>
          {page}
        </span>
      })}
    </div>
    {
      props.users.map(user => <div key={user.id}>
        <div>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : photoDefault} alt="ava" />
            </NavLink>
          </div>
          <div>
            {user.followed
              ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                props.unfollow(user.id)
              }}>
                Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                props.follow(user.id)
              }}>
                Follow</button>
            }
          </div>
        </div>
        <div>
          <div>
            <div>
              {user.name}
            </div>
            <div>
              {user.status}
            </div>
          </div>
          <div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
          </div>
        </div>
      </div>)
    }
  </div>
}

export default Users;