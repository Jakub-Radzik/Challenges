import {
  FETCH_FOLLOWING_FAILURE,
  FETCH_FOLLOWING_SUCCESS,
  FETCH_FOLLOWING_REQUEST,
} from './followingTypes';

const initialState = {
  loading: false,
  following: {},
  error: '',
};

const followingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOLLOWING_SUCCESS:
      return {
        loading: false,
        following: action.payload,
        error: '',
      };
    case FETCH_FOLLOWING_FAILURE:
      return {
        loading: false,
        following: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default followingReducer;
