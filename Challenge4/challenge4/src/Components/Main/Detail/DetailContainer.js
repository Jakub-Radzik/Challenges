import * as React from 'react';
import {useEffect} from "react";
import {fetchCountry} from "../../../Redux/Country/countryActions";
import {connect} from "react-redux";
import {Desc} from "../../StyledComponents/Card/CardStyledComponents";
import styled from "styled-components";

function DetailContainer(props) {

    useEffect(()=>{
        props.fetchData();
        console.log(props.item.country.name)
    },[])


    const Flag = styled.img`
      width: 40%
    `

    const Container = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border: 1px solid black;
      width: 90%;
      margin: auto;
      min-height: 500px;
    `

    const Heading = styled.div`
      font-weight: 700;
      font-size: 2rem;
    `

    const Right = styled.div`
      width: 100%;
    `

    const Details = styled.div`
      border: 1px solid black;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      width: 100%;
      
      
      >div{
        border: 1px solid black;
      }
    `

    return (
        <div>
        {
           props && props.item && props.item.country &&  props.item.country.currencies &&
            <Container>
               <Flag src={props.item.country.flag} alt="flag"/>
               <Right>
                   <Heading>{props.item.country.name}</Heading>
                   <Details>
                       <div>
                           <p><Desc>Native Name: </Desc>{props.item.country.name}</p>
                           <p><Desc>Population: </Desc>{props.item.country.nativeName}</p>
                           <p><Desc>Region: </Desc>{props.item.country.region}</p>
                           <p><Desc>Sub Region: </Desc>{props.item.country.subregion}</p>
                           <p><Desc>Capital: </Desc>{props.item.country.capital}</p>
                       </div>
                       <div>
                           <p><Desc>Top Level Domain: </Desc>{props.item.country.topLevelDomain}</p>
                           <p><Desc>Currencies: </Desc>{props.item.country.currencies.map((elem, idx)=>{
                               return <span>{elem.name}</span>
                           })}</p>
                           <p><Desc>Languages: </Desc>{props.item.country.languages.map((elem, idx)=>{
                               return <span>{elem.name}</span>
                           })}</p>
                       </div>
                   </Details>
               </Right>
           </Container>
        }
        </div>
    );
}


function mapStateToProps(state) {
    return {
        item: state.country
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchData: () => dispatch(fetchCountry(props.code))
    };
}

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
    )(DetailContainer)
);