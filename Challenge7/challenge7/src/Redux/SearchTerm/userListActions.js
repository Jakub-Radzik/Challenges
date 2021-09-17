import axios from 'axios';
import {
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
} from './userListTypes';

export const fetchUsersListRequest = () => {
  return {
    type: FETCH_USERS_LIST_REQUEST,
  };
};

export const fetchUsersListSuccess = (usersList) => {
  return {
    type: FETCH_USERS_LIST_SUCCESS,
    payload: usersList,
  };
};

export const fetchUsersListFailure = (error) => {
  return {
    type: FETCH_USERS_LIST_FAILURE,
    payload: error,
  };
};

export const fetchUserList = (searchTerm, page, per_page = 10) => {
  return (dispatch) => {
    dispatch(fetchUsersListRequest());
    axios
      .get(
        `https://api.github.com/search/users?q=${searchTerm}&page=${page}&per_page=${per_page}`
      )
      .then((response) => {
        dispatch(fetchUsersListSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersListFailure(error.message));
      });
  };
};
