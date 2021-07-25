import * as React from 'react';
import {useContext, useState} from 'react';
import styled from "styled-components";
import {darkThemeContext} from "../../../../App";
import {Search} from "../../../StyledComponents/Bar/StyledSearch";

function SearchInput() {

    const darkThemeCtx = useContext(darkThemeContext);

    const [phrase, setPhrase] = useState("");

    const handler = (event) => {
        setPhrase(event.target.value);
    }

    return (
        <Search input={darkThemeCtx.theme.set.input} type="text" value={phrase} onChange={event => handler(event)}/>
    );
}

export default SearchInput