import * as React from 'react';
import {useContext, useState} from "react";
import styled from "styled-components";
import {darkThemeContext} from "../../../../App";
import {Option, Select} from "../../../StyledComponents/Bar/StlyedRegionSelect";

function RegionSelectFilter() {

    const darkThemeCtx = useContext(darkThemeContext);

    const [value, setValue] = useState("All");

    const handle = (event) => {
        setValue(event.target.value);
    }

    return (
        <Select value={value} onChange={(event) => handle(event)} input={darkThemeCtx.theme.set.input}
                elements={darkThemeCtx.theme.set.elements}>
            <Option value="World">World</Option>
            <Option value="Africa">Africa</Option>
            <Option value="America">America</Option>
            <Option value="Asia">Asia</Option>
            <Option value="Europe">Europe</Option>
            <Option value="Oceania">Oceania</Option>
        </Select>
    );
}

export default RegionSelectFilter;