import React, {useContext} from 'react';
import {darkThemeContext} from "../../App";
import styled from "styled-components";

function Main() {

    const darkThemeCtx = useContext(darkThemeContext);

    const Main = styled.main`
        width:100%;
        min-height: 90vh;
        // background: red;
        // background: ${darkThemeCtx.theme.set.background};
        // color: ${darkThemeCtx.theme.set.text};
    `


    return (
        <Main>

        </Main>
    );
}

export default Main;
