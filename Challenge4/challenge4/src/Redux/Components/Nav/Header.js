import React, {useContext, useState} from 'react';
import {darkThemeContext} from "../../../App";
import styled, {css} from 'styled-components';

function Header(){

    const darkThemeCtx = useContext(darkThemeContext);

    const Header = styled.header`
        width:100%;
        height: 100px;
        background: ${darkThemeCtx.theme.set.background};
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    `;

    const [txt, setTxt] = useState('Light Theme');

    const toggler = () => {
        darkThemeCtx.toggleTheme();
        if(txt==="Light Theme"){
            setTxt("Dark Theme");
        }else {
            setTxt("Light Theme");
        }
    }

    return (
        <Header>
            <h1>Where in the world</h1>
            <div onClick={()=>toggler()}>
                {txt}
            </div>
        </Header>
    );
}

export default Header;

