import React, {useContext, useState} from 'react';
import {darkThemeContext} from "../../App";
import {Responsive} from "../StyledComponents/Responsive";
import {Content} from "../StyledComponents/Nav/StyledHeader";
import {StyledHeader, ThemeButton, Toggler} from "../StyledComponents/Nav/StyledHeader";

function Header() {

    const darkThemeCtx = useContext(darkThemeContext);

    return (
        <StyledHeader elements={darkThemeCtx.theme.set.elements} text={darkThemeCtx.theme.set.text}
                      navShadow={darkThemeCtx.theme.set.navShadow}>
            <Responsive>
                <Content>
                    <h1>Where in the world ?</h1>
                    <Toggler onClick={() => darkThemeCtx.toggleTheme()}>
                        <ThemeButton src={darkThemeCtx.theme.set.toggler} alt="theme-button"/>
                        <p>
                            {darkThemeCtx.theme.set.changeFor}
                        </p>

                    </Toggler>
                </Content>
            </Responsive>
        </StyledHeader>
    );
}

export default Header;

