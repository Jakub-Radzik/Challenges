import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Card from "../Card/Card";
import {connect} from "react-redux";
import {fetchCountries} from "../../Redux/Countries/countriesActions";

function Main(props) {
    //TODO: move redux to app
    const darkThemeCtx = useContext(darkThemeContext);

    useEffect(()=>{
            props.fetchData();
    },[])

    const Main = styled.main`
        width:100%;
        min-height: 90vh;
    `

    return props.item.loading ? (
        <Main>
            <div id="loading">Loading</div>
        </Main>
        ) : props.item.error ? (
        <Main>
            <div id="Error">Error</div>
        </Main>
        ) : (
        <Main>
            {
                props.item && props.item.countries && props.item.countries.map(country => <Card name={country.name}/>)
            }
        </Main>
        );
}

function mapStateToProps(state) {
    return {
        item : state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData : () => dispatch(fetchCountries())
    };
}

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main));
