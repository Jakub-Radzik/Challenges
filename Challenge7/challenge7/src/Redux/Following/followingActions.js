import axios from 'axios';
import {
  FETCH_FOLLOWING_FAILURE,
  FETCH_FOLLOWING_REQUEST,
  FETCH_FOLLOWING_SUCCESS,
} from './followingTypes';

export const fetchFollowingRequest = () => {
  return {
    type: FETCH_FOLLOWING_REQUEST,
  };
};

export const fetchFollowingSuccess = (following) => {
  return {
    type: FETCH_FOLLOWING_SUCCESS,
    payload: following,
  };
};

export const fetchFollowingFailure = (error) => {
  return {
    type: FETCH_FOLLOWING_FAILURE,
    payload: error,
  };
};

export const fetchFollowing = (url) => {
  return (dispatch) => {
    dispatch(fetchFollowingRequest());
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchFollowingSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFollowingFailure(error.message));
      });
  };
};
