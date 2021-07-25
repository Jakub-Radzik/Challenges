import * as React from 'react';
import {StyledFunctionalBar} from "../../StyledComponents/Bar/StyledFunctionalBar";
import StyledSearchBar from "./Tools/SearchBar";
import RegionSelectFilter from "./Tools/RegionSelectFilter";

function FunctionalBar(props) {

    return (
        <StyledFunctionalBar>
            <StyledSearchBar phrase={props.valueSearch} handler={props.handleSearch}/>
            <RegionSelectFilter handle={props.handleRegion} value={props.valueRegion}/>
        </StyledFunctionalBar>
    );
}

export default FunctionalBar