import * as React from 'react';
import {useContext} from 'react';
import {darkThemeContext} from "../../../../App";
import SearchInput from "./SearchInput";
import {StyledIcon, StyledSearchEngine} from "../../../StyledComponents/Bar/StyledSearchBar";

function SearchBar() {

    const darkThemeCtx = useContext(darkThemeContext);


    return (
        <StyledSearchEngine elements={darkThemeCtx.theme.set.elements}>
            <StyledIcon src={darkThemeCtx.theme.set.magnifier}/>
            <SearchInput/>
        </StyledSearchEngine>
    );
}

export default SearchBar;