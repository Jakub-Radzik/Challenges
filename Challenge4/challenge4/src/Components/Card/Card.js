import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Description from "./Description";
import {darkThemeContext} from "../../App";

function Card(props) {

    const darkThemeCtx = useContext(darkThemeContext);

    const radius = "10px";

    const CardStyled = styled.div`
      width: 300px;
      display: inline-block;
      margin: 20px;
      background: ${darkThemeCtx.theme.set.background};
      color: ${darkThemeCtx.theme.set.text};
      box-shadow: ${darkThemeCtx.theme.set.navShadow};
      border-radius: ${radius};
    `

    const Flag = styled.img`
      width: 100%;
      height: 200px;
      border-radius: ${radius} ${radius} 0 0;
    `


    return (
        <CardStyled>
            <Flag src={props.flag} alt={props.name}/>
            <Description name={props.name} population={props.population} region={props.region} capital={props.capital}/>
        </CardStyled>
    );
}

export default React.memo(Card);
