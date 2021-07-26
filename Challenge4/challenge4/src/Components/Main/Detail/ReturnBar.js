import * as React from 'react';
import {useContext} from 'react';
import {Responsive} from "../../StyledComponents/Responsive";
import {darkThemeContext} from "../../../App";
import {Link} from "react-router-dom";
import {
    Arrow,
    BackButton,
    BackButtonContainer,
    StyledReturnBar
} from "../../StyledComponents/Main/DetailStyledComponents";

function ReturnBar() {

    const darkThemeCtx = useContext(darkThemeContext);


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
