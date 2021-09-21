import {
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
} from './userListTypes';

const initialState = {
  loading: false,
  usersList: [],
  error: '',
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_LIST_SUCCESS:
      return {
        loading: false,
        usersList: action.payload,
        error: '',
      };
    case FETCH_USERS_LIST_FAILURE:
      return {
        loading: false,
        usersList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userListReducer;
