import axios from 'axios';
import {
  FETCH_OVERVIEW_REQUEST,
  FETCH_OVERVIEW_SUCCESS,
  FETCH_OVERVIEW_FAILURE,
} from './overviewTypes';

export const fetchOverviewRequest = () => {
  return {
    type: FETCH_OVERVIEW_REQUEST,
  };
};

export const fetchOverviewSuccess = (overview) => {
  return {
    type: FETCH_OVERVIEW_SUCCESS,
    payload: overview,
  };
};

export const fetchOverviewFailure = (error) => {
  return {
    type: FETCH_OVERVIEW_FAILURE,
    payload: error,
  };
};

export const fetchOverview = (url) => {
  return (dispatch) => {
    dispatch(fetchOverviewRequest());
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchOverviewSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchOverviewFailure(error.message));
      });
  };
};
