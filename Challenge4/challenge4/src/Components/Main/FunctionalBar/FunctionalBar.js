import * as React from 'react';
import {StyledFunctionalBar} from "../../StyledComponents/Bar/StyledFunctionalBar";
import StyledSearchBar from "./Tools/SearchBar";
import RegionSelectFilter from "./Tools/RegionSelectFilter";

function FunctionalBar(props) {


    return (
        <StyledFunctionalBar>
            <StyledSearchBar search={props.search}/>
            <RegionSelectFilter handle={props.handle} value={props.value}/>
        </StyledFunctionalBar>
    );
}

export default FunctionalBar