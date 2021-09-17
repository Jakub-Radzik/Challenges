import {
  FETCH_OVERVIEW_REQUEST,
  FETCH_OVERVIEW_SUCCESS,
  FETCH_OVERVIEW_FAILURE,
} from './overviewTypes';

const initialState = {
  loading: false,
  overview: {},
  error: '',
};

const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OVERVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_OVERVIEW_SUCCESS:
      return {
        loading: false,
        overview: action.payload,
        error: '',
      };
    case FETCH_OVERVIEW_FAILURE:
      return {
        loading: false,
        overview: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default overviewReducer;
