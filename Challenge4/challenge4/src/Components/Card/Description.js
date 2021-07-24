import styled from "styled-components";
import React from "react";

function Description(props){

    const Desc = styled.span`
        font-weight: 700;
    `;

    const Contain = styled.div`
      width: 90%;
      margin: 0 auto 40px auto;
      
      h4{
        font-size: 1.3rem;
      }
    `

    const Text = styled.div`
        line-height: 12px;
    `

    return(
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