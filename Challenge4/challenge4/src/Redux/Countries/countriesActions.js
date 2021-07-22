import axios from "axios";
import {FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS} from "./countriesTypes";

export const fetchCountriesRequest = () => {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
}

export const fetchCryptoCurrenciesSuccess = (countries) => {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

export const fetchCryptoCurrenciesFailure = (error) => {
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}

export const fetchCryptoCurrencies = () => {
    return (dispatch) => {
        dispatch(fetchCountriesRequest());
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                dispatch(fetchCryptoCurrenciesSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchCryptoCurrenciesFailure(error.message))
            })
    }
}
