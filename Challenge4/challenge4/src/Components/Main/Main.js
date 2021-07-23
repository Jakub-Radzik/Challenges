import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Card from "../Card/Card";
import {darkThemeContext} from "../../App";

function Main(props) {
    //TODO: move redux to app
    const darkThemeCtx = useContext(darkThemeContext);

    const Main = styled.main`
        width:100%;
        min-height: 90vh;
    `

    return (
        <Main>
            {
                props.countries && props.countries.map(country => <Card name={country.name}/>)
            }
        </Main>
        );
}
export default Main;
