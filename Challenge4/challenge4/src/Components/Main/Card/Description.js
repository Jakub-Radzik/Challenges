import React from "react";
import {Contain, Desc, Text} from "../../StyledComponents/Card/CardStyledComponents";

function Description(props) {

    return (
        <Contain>
            <h4>{props.name}</h4>
            <Text>
                <p><Desc>Population: </Desc>{props.population}</p>
                <p><Desc>Region: </Desc>{props.region}</p>
                <p><Desc>Capital: </Desc>{props.capital}</p>
            </Text>
        </Contain>
    );
}

export default React.memo(Description);