import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILURE,
} from './repositoriesTypes';

const initialState = {
  loading: false,
  repos: [],
  error: '',
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        repos: action.payload,
        error: '',
      };
    case FETCH_REPOSITORIES_FAILURE:
      return {
        loading: false,
        repositories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
