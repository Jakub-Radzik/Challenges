import axios from "axios";
import {FETCH_COUNTRY_FAILURE, FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS} from "./countryTypes";


export const fetchCountryRequest = () => {
    return {
        type: FETCH_COUNTRY_REQUEST
    }
}

export const fetchCountrySuccess = (countries) => {
    return {
        type: FETCH_COUNTRY_SUCCESS,
        payload: countries
    }
}

export const fetchCountryFailure = (error) => {
    return {
        type: FETCH_COUNTRY_FAILURE,
        payload: error
    }
}

export const fetchCountry = (code) => {
    return (dispatch) => {
        dispatch(fetchCountryRequest());
        axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
            .then(response => {
                dispatch(fetchCountrySuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchCountryFailure(error.message))
            })
    }
}
