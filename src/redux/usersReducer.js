const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';

const initialState = {
  users: [],
  count: 5,
  curentPage: 1,
  term: '',
  friend: true,
  totalCount: 0,
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      }

    case SET_USERS:
      return { ...state, users: [...action.users] }

    case SET_CURRENT_PAGE:
      return { ...state, curentPage: action.curentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCount: action.totalCount }

    case TOGGLE_IS_FATCHING:
      return { ...state, isFetching: action.isFetching }

    default:
      return state
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurentPage = (curentPage) => ({ type: SET_CURRENT_PAGE, curentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FATCHING, isFetching })

export default usersReducer;