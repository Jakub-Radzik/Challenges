import styled from "styled-components";

export const Flag = styled.img`
      width: 40%
    `

export const StyledDetail = styled.div`
      height: calc(100vh - 100px);
    `

export const Container = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 90%;
      margin: auto;
      min-height: 500px;
    `

export const Heading = styled.div`
      font-weight: 700;
      font-size: 2rem;
      margin: 0 0 20px 50px;
    `

export const Right = styled.div`
      width: 100%;
      color: ${props => props.text}
    `

export const Details = styled.div`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      
      
      >div{
        margin-left:50px;
      }
    `

export const BorderCountries = styled.div`
        margin-left:50px;
    `

export const BorderCountry = styled.div`
        border-radius: 5px;
        background: ${props => props.elements};
        color: ${props => props.text};
        display: inline-block;
        margin: 0 5px;
        padding: 0 5px;
    `

//RETURN BAR


export const StyledReturnBar = styled.div`
      width: 100%;
    `

export const BackButtonContainer = styled.div`
      width: 90%;
      margin: auto;
      padding: 30px 0;
    `

export const BackButton = styled.div`
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

export const Arrow = styled.img`
      height: 20px;
      margin-right: 10px;
      transform: rotate(180deg);
    `
