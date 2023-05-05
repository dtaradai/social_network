import React from "react";
import s from './Users.module.css';

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, fullName: 'user1', followed: true, status: 'status1', location: { city: 'city1', country: 'country1' }, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC1MUr5qp4y37dbg0R5kSUgFhf7SpE7ndDQ&usqp=CAU' },
      { id: 2, fullName: 'user2', followed: true, status: 'status2', location: { city: 'city2', country: 'country1' }, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC1MUr5qp4y37dbg0R5kSUgFhf7SpE7ndDQ&usqp=CAU' },
      { id: 3, fullName: 'user3', followed: false, status: 'status3', location: { city: 'city3', country: 'country1' }, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC1MUr5qp4y37dbg0R5kSUgFhf7SpE7ndDQ&usqp=CAU' },
      { id: 4, fullName: 'user4', followed: false, status: 'status4', location: { city: 'city4', country: 'country1' }, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC1MUr5qp4y37dbg0R5kSUgFhf7SpE7ndDQ&usqp=CAU' },
    ])
  }

  return <div>
    {
      props.users.map(user => <div key={user.id}>
        <div>
          <div>
            <img src={user.ava} alt="ava" />
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
              {user.fullName}
            </div>
            <div>
              {user.status}
            </div>
          </div>
          <div>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </div>
        </div>
      </div>)
    }
    {/* <button onClick={addUser}>Add user</button> */}

  </div>
}

export default Users;