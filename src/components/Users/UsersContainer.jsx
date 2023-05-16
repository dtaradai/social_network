import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurentPage, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.curentPage, this.props.count);
  }

  onPageChanged = (curentPage) => {
    this.props.setCurentPage(curentPage);
    this.props.getUsers(curentPage, this.props.count);
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,
    {
      follow,
      unfollow,
      setCurentPage,
      getUsers,
    }))(UsersContainer);