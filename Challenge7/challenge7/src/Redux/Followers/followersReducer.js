import {
  FETCH_FOLLOWERS_FAILURE,
  FETCH_FOLLOWERS_REQUEST,
  FETCH_FOLLOWERS_SUCCESS,
} from './followersTypes';

const initialState = {
  loading: false,
  followers: {},
  error: '',
};

const followersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOLLOWERS_SUCCESS:
      return {
        loading: false,
        followers: action.payload,
        error: '',
      };
    case FETCH_FOLLOWERS_FAILURE:
      return {
        loading: false,
        followers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default followersReducer;
