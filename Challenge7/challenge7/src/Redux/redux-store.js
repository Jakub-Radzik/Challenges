import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userListReducer from './SearchTerm/userListReducer';
import followersReducer from './Followers/followersReducer';
import followingReducer from './Following/followingReducer';
import repositoriesReducer from './Repositories/repositoriesReducer';
import overviewReducer from './Overview/overviewReducer';
import themeReducer from './Theme/themeSlice';

let rootReducer = combineReducers({
  userList: userListReducer,
  followers: followersReducer,
  following: followingReducer,
  repos: repositoriesReducer,
  overview: overviewReducer,
  theme: themeReducer, //implemented
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

//TODO: FOLLOWERS, FOLLOWING, REPOS, OVERVIEW - find common pattern in url and set variables
