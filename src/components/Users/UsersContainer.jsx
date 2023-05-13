import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.curentPage, this.props.count)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.setUsers(data.items);
      });
  }

  onPageChanged = (curentPage) => {
    this.props.toggleIsFetching(true);
    this.props.setCurentPage(curentPage);
    usersAPI.getUsers(curentPage, this.props.count)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.setUsers(data.items);
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users curentPage={this.props.curentPage}
        count={this.props.count}
        totalCount={this.props.totalCount}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
  })(UsersContainer);