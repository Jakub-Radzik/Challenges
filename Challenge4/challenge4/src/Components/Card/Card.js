import React from 'react';
import styled from "styled-components";

function Card(props) {

    const Desc = styled.span`
        font-weight: 700;
    `;

    const CardStyled = styled.div`
        width:300px;
        display: inline-block;
        border: 1px solid black;
        margin: 20px;
    `

    const Flag = styled.img`
        width: 100%;
        height: 200px;
    `

    return (
        <CardStyled>
            <Flag src={props.flag} alt={props.name}/>
            <div>
                <h4>{props.name}</h4>
                <div>
                    <p><Desc>Population: </Desc>{props.population}</p>
                    <p><Desc>Region: </Desc>{props.region}</p>
                    <p><Desc>Capital: </Desc>{props.capital}</p>
                </div>
            </div>
        </CardStyled>
    );
}

export default React.memo(Card);
