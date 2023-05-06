import React from "react";
import s from './Users.module.css';
import axios from "axios";
import photoDefault from './../../assets/images/photoDefault.jpg'

class Users extends React.Component {
  componentDidMount() {
    this.getUsers(this.props.curentPage, this.props.count);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.curentPage}`).then(response => {
    //   this.props.setUsers(response.data.items);
    //   this.props.setTotalCount(response.data.totalCount);
    // });
  }

  getUsers(page, count) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`)
    .then(response => {
      this.props.setTotalCount(response.data.totalCount);
      this.props.setUsers(response.data.items);
    });
  }

  onPageChanged = (curentPage) => {
    this.props.setCurentPage(curentPage)
    this.getUsers(curentPage, this.props.count);

    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${curentPage}`).then(response => {
    //   this.props.setUsers(response.data.items);
    //   this.props.setTotalCount(response.data.totalCount);
    // });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.count);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      <div>
        {pages.map(page => {
          return <span className={this.props.curentPage === page ? s.selectedPage : ''}
          onClick={ () => {this.onPageChanged(page)} } key={page}>
            {page}
          </span>
        })}
      </div>
      {
        this.props.users.map(user => <div key={user.id}>
          <div>
            <div>
              <img src={user.photos.small != null ? user.photos.small : photoDefault} alt="ava" />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => { this.props.unfollow(user.id) }}>Unollow</button>
                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}

export default Users;