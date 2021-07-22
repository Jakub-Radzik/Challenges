import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import countriesReducer from "./Countries/countriesReducer";

let rootReducer = combineReducers({
    countries : countriesReducer(),
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
