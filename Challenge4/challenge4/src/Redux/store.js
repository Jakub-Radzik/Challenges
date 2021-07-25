import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import countriesReducer from "./Countries/countriesReducer";
import countryReducer from "./Country/countryReducer";

let rootReducer = combineReducers({
    countries: countriesReducer,
    country: countryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
