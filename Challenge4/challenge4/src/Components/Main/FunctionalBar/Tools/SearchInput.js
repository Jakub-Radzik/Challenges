import * as React from 'react';
import {useContext, useState} from 'react';
import styled from "styled-components";
import {darkThemeContext} from "../../../../App";
import {Search} from "../../../StyledComponents/Bar/StyledSearch";

function SearchInput(props) {

    const darkThemeCtx = useContext(darkThemeContext);


    return (
        <Search input={darkThemeCtx.theme.set.input} type="text" value={props.phrase} onChange={event => props.handler(event)}/>
    );
}

export default SearchInput