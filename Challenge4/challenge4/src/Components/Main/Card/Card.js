import React, {useContext} from 'react';
import Description from "./Description";
import {darkThemeContext} from "../../../App";
import {CardStyled, Flag} from "../../StyledComponents/Card/CardStyledComponents";

function Card(props) {

    const darkThemeCtx = useContext(darkThemeContext);

    const radius = "10px";


    return (
        <CardStyled elements={darkThemeCtx.theme.set.elements} text={darkThemeCtx.theme.set.text}
                    navShadow={darkThemeCtx.theme.set.navShadow} radius={radius}>
            <Flag radius={radius} src={props.flag} alt={props.name}/>
            <Description name={props.name} population={props.population} region={props.region} capital={props.capital}/>
        </CardStyled>
    );
}

export default React.memo(Card);
