import * as React from 'react';
import {useContext} from 'react';
import styled from "styled-components";
import {Responsive} from "../../StyledComponents/Responsive";
import {darkThemeContext} from "../../../App";
import {Link} from "react-router-dom";

function ReturnBar() {

    const darkThemeCtx = useContext(darkThemeContext);

    const StyledReturnBar = styled.div`
      width: 100%;
      border: 1px solid black;
    `

    const BackButtonContainer = styled.div`
      width: 90%;
      margin: auto;
      padding: 50px 0;
      border: 1px solid black;
    `

    const BackButton = styled.div`
      width: min-content;
      padding: 5px 30px;
      border-radius: 5px;
      font-weight: 500;
      background: ${props => props.elements};
      color: ${props => props.text};
      box-shadow: ${props => props.navShadow};
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
    `

    const Arrow = styled.img`
      height: 20px;
      margin-right: 10px;
      transform: rotate(180deg);
    `

    return (
        <StyledReturnBar>
            <Responsive>
                <BackButtonContainer>
                    <Link to={"/"}>
                        <BackButton elements={darkThemeCtx.theme.set.elements} text={darkThemeCtx.theme.set.text}
                                    navShadow={darkThemeCtx.theme.set.navShadow}>
                            <Arrow src={darkThemeCtx.theme.set.arrow} alt="arrow"/>
                            Back
                        </BackButton>
                    </Link>
                </BackButtonContainer>
            </Responsive>
        </StyledReturnBar>
    );
}


export default ReturnBar;