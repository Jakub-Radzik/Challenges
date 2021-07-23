import axios from "axios";
import {FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS} from "./countriesTypes";

export const fetchCountriesRequest = () => {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
}

export const fetchCountriesSuccess = (countries) => {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

export const fetchCountriesFailure = (error) => {
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}

export const fetchCountries = () => {
    return (dispatch) => {
        dispatch(fetchCountriesRequest());
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                dispatch(fetchCountriesSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchCountriesFailure(error.message))
            })
    }
}
