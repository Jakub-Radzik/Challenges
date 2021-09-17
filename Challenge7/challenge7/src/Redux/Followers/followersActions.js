import axios from 'axios';
import {
  FETCH_FOLLOWERS_FAILURE,
  FETCH_FOLLOWERS_REQUEST,
  FETCH_FOLLOWERS_SUCCESS,
} from './followersTypes';

export const fetchFollowersRequest = () => {
  return {
    type: FETCH_FOLLOWERS_REQUEST,
  };
};

export const fetchFollowersSuccess = (followers) => {
  return {
    type: FETCH_FOLLOWERS_SUCCESS,
    payload: followers,
  };
};

export const fetchFollowersFailure = (error) => {
  return {
    type: FETCH_FOLLOWERS_FAILURE,
    payload: error,
  };
};

export const fetchFollowers = (url) => {
  return (dispatch) => {
    dispatch(fetchFollowersRequest());
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchFollowersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFollowersFailure(error.message));
      });
  };
};
