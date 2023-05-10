import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    this.getUsers(this.props.curentPage, this.props.count);
  }

  onPageChanged = (curentPage) => {
    this.props.toggleIsFetching(true);
    this.props.setCurentPage(curentPage);
    this.getUsers(curentPage, this.props.count);
  }
  getUsers(page, count) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader />
        : null}
      <Users curentPage={this.props.curentPage}
        count={this.props.count}
        totalCount={this.props.totalCount}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    curentPage: state.usersPage.curentPage,
    isFetching: state.usersPage.isFetching,
  }
}

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurentPage,
    setTotalUsersCount,
    toggleIsFetching
  })(UsersContainer);