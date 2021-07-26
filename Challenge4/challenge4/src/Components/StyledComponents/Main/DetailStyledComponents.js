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
      border: 1px solid black;
      width: 90%;
      margin: auto;
      min-height: 500px;
    `

export const Heading = styled.div`
      font-weight: 700;
      font-size: 2rem;
      border: 1px solid black;
      margin: 0 0 20px 50px;
    `

export const Right = styled.div`
      width: 100%;
      color: ${props => props.text}
    `

export const Details = styled.div`
      border: 1px solid black;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      
      
      >div{
        border: 1px solid black;
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
    `
