import * as React from 'react';
import {useContext} from 'react';
import {darkThemeContext} from "../../../../App";
import {Option, Select} from "../../../StyledComponents/Bar/StlyedRegionSelect";

function RegionSelectFilter(props) {

    const darkThemeCtx = useContext(darkThemeContext);


    return (
        <Select value={props.value} onChange={(event) => props.handle(event)} input={darkThemeCtx.theme.set.input}
                elements={darkThemeCtx.theme.set.elements}>
            <Option value="World">World</Option>
            <Option value="Africa">Africa</Option>
            <Option value="Americas">Americas</Option>
            <Option value="Asia">Asia</Option>
            <Option value="Europe">Europe</Option>
            <Option value="Oceania">Oceania</Option>
        </Select>
    );
}

export default RegionSelectFilter;