import * as React from 'react';
import {useContext, useState} from 'react';
import {darkThemeContext} from "../../../../App";
import SearchInput from "./SearchInput";
import {StyledIcon, StyledSearchEngine} from "../../../StyledComponents/Bar/StyledSearchBar";

function SearchBar(props) {

    const darkThemeCtx = useContext(darkThemeContext);

    return (
        <StyledSearchEngine elements={darkThemeCtx.theme.set.elements}>
            <StyledIcon src={darkThemeCtx.theme.set.magnifier}/>
            <SearchInput phrase={props.phrase} handler={props.handler}/>
        </StyledSearchEngine>
    );
}

export default SearchBar;