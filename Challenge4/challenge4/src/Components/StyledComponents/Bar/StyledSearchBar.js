import styled from "styled-components";

export const StyledSearchEngine = styled.div`
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background: ${props => props.elements};
      
      @media(max-width: 900px){
        width: 100%
            }
    `;

export const StyledIcon = styled.img`
      width: 25px;
      margin-left: 20px;
    `
