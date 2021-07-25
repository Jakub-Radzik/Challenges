import * as React from 'react';
import styled from "styled-components";
import {useContext, useState} from "react";
import {darkThemeContext} from "../../../../App";
import SearchInput from "./SearchInput";

function SearchBar() {

    const darkThemeCtx = useContext(darkThemeContext);

    const StyledSearchEngine = styled.div`
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background: ${darkThemeCtx.theme.set.elements};
    `;

    const StyledIcon = styled.img`
      width: 25px;
      margin-left: 20px;
    `



    return (
        <StyledSearchEngine>
            <StyledIcon src={darkThemeCtx.theme.set.magnifier}/>
            <SearchInput/>
        </StyledSearchEngine>
    );
}

export default SearchBar;