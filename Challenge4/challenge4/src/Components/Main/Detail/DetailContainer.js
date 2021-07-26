import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {fetchCountry} from "../../../Redux/Country/countryActions";
import {connect} from "react-redux";
import {Desc} from "../../StyledComponents/Card/CardStyledComponents";
import {Responsive} from "../../StyledComponents/Responsive";
import {darkThemeContext} from "../../../App";
import {
    BorderCountries, BorderCountry,
    Container,
    Details,
    Flag,
    Heading,
    Right
} from "../../StyledComponents/Main/DetailStyledComponents";
import axios from "axios";
import async from "async";

function DetailContainer(props) {

    const darkThemeCtx = useContext(darkThemeContext);

    const [borderCountries, setBorderCountries] = useState({border: []});

    useEffect(() => {
        props.fetchData();
    }, [])

    // function axiosTest(code) {
    //     const promise = axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
    //     const dataPromise = promise.then((response) => response.data)
    //     return dataPromise
    // }

    async function axiosTest(code) {
        console.log(code)
        const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
        console.log(response)
        return response.data.name;
    }


    // useEffect(()=>{console.log(borderCountries)},[borderCountries])

    return (
        <React.Fragment>
            {
                props && props.item && props.item.country && props.item.country.currencies &&
                <Responsive>
                    <Container>
                        <Flag src={props.item.country.flag} alt="flag"/>
                        <Right text={darkThemeCtx.theme.set.text}>
                            <Heading>{props.item.country.name}</Heading>
                            <Details>
                                <div>
                                    <p><Desc>Native Name: </Desc>{props.item.country.name}</p>
                                    <p><Desc>Population: </Desc>{props.item.country.nativeName}</p>
                                    <p><Desc>Region: </Desc>{props.item.country.region}</p>
                                    <p><Desc>Sub Region: </Desc>{props.item.country.subregion}</p>
                                    <p><Desc>Capital: </Desc>{props.item.country.capital}</p>
                                </div>
                                <div>
                                    <p><Desc>Top Level Domain: </Desc>{props.item.country.topLevelDomain}</p>
                                    <p><Desc>Currencies: </Desc>{props.item.country.currencies.map((elem, idx) => {
                                        return <span>{elem.name}</span>
                                    })}</p>
                                    <p><Desc>Languages: </Desc>{props.item.country.languages.map((elem, idx) => {
                                        return <span>{elem.name}</span>
                                    })}</p>
                                </div>
                            </Details>
                            <BorderCountries>
                                <p><Desc>Border Countries: </Desc>{props.item.country.borders.map((elem, idx) => {
                                    return <BorderCountry>{elem}</BorderCountry>
                                })}</p>
                            </BorderCountries>
                        </Right>
                    </Container>
                </Responsive>
            }
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {
        item: state.country,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchData: () => dispatch(fetchCountry(props.code)),
    };
}

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
    )(DetailContainer)
);
