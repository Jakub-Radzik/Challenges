import React, {useContext, useState} from 'react';
import {darkThemeContext} from "../../App";
import styled from 'styled-components';
import {Responsive} from "../Global/Responsive";

function Header(){

    const darkThemeCtx = useContext(darkThemeContext);

    const Header = styled.header`
        width:100%;
        height: 100px;
        background: ${darkThemeCtx.theme.set.background};
        color: ${darkThemeCtx.theme.set.text};
        box-shadow: ${darkThemeCtx.theme.set.navShadow};
        -webkit-box-shadow: ${darkThemeCtx.theme.set.navShadow};
    `;

    const Content = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: 700;
    `

    const ThemeButton = styled.img`
        width: 20px;
        margin-right: 10px;
    `

    const Toggler = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        line-height: 20px;
        font-weight: 300;
        letter-spacing: 2px;
    `

    return (
        <Header>
            <Responsive>
                <Content>
                    <h1>Where in the world ?</h1>
                    <Toggler onClick={()=>darkThemeCtx.toggleTheme()}>
                        <ThemeButton src={darkThemeCtx.theme.set.toggler} alt="theme-button"/>
                        <p>
                            {darkThemeCtx.theme.set.changeFor}
                        </p>

                    </Toggler>
                </Content>
            </Responsive>
        </Header>
    );
}

export default Header;

