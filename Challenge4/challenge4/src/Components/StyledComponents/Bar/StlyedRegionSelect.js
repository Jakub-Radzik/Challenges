import styled from "styled-components";

export const Select = styled.select`
      height: 50px;
      width: 170px;
      padding: 0 20px;
      font-family: 'Nunito Sans',serif;
      border: 0;
      outline: 0;
      border-radius: 10px;
      color: ${props => props.input};
      background: ${props => props.elements};
      @media(max-width: 900px){
            width:100%;
            margin-top:10px;
        }
    `
//TODO: style for dropdown
export const Option = styled.option`
      height: 30px;
      font-size: 1.3rem;
    `
