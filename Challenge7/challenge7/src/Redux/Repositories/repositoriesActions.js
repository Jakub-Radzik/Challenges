import axios from 'axios';
import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILURE,
} from './repositoriesTypes';

export const fetchRepositoriesRequest = () => {
  return {
    type: FETCH_REPOSITORIES_REQUEST,
  };
};

export const fetchRepositoriesSuccess = (repositories) => {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    payload: repositories,
  };
};

export const fetchRepositoriesFailure = (error) => {
  return {
    type: FETCH_REPOSITORIES_FAILURE,
    payload: error,
  };
};

export const fetchRepositories = (url) => {
  return (dispatch) => {
    dispatch(fetchRepositoriesRequest());
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchRepositoriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchRepositoriesFailure(error.message));
      });
  };
};
