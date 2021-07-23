import React from 'react';
import styled from "styled-components";

function Card(props) {

    const Desc = styled.span`
        font-weight: 700;
    `;

    const CardStyled = styled.div`
        width:300px;
        height:300px;
        display: inline-block;
    `

    return (
        <CardStyled>
            {/*<img src="" alt=""/>*/}
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
