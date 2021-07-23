import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Card from "../Card/Card";
import {darkThemeContext} from "../../App";
import {Responsive} from "../Global/Responsive";

function Main(props) {
    //TODO: move redux to app
    const darkThemeCtx = useContext(darkThemeContext);

    const Main = styled.main`
        width:100%;
        min-height: 100vh;
    `
    const Content = styled.div`
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `

    return (
        <Main>
            <Responsive>
                <Content>
                    {
                        props.countries && props.countries.slice(0,28)
                            .map(
                            country => <Card
                                flag = {country.flag}
                                name={country.name}
                                population={country.population}
                                region = {country.region}
                                capital = {country.capital}
                            />
                            )
                    }
                </Content>
            </Responsive>
        </Main>
        );
}
export default React.memo(Main);
