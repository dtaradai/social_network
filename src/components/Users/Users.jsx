import React from "react";
import s from './Users.module.css';
import photoDefault from './../../assets/images/photoDefault.jpg'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.count);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(page => {
        return <span className={props.curentPage === page ? s.selectedPage : ''}
          onClick={() => { props.onPageChanged(page) }} key={page}>
          {page}
        </span>
      })}
    </div>
    {
      props.users.map(user => <div key={user.id}>
        <div>
          <div>
            <img src={user.photos.small != null ? user.photos.small : photoDefault} alt="ava" />
          </div>
          <div>
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>Unollow</button>
              : <button onClick={() => { props.follow(user.id) }}>Follow</button>
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