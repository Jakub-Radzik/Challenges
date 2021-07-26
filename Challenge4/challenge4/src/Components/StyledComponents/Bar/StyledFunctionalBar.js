import styled from "styled-components";

export const StyledFunctionalBar = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 900px){
    flex-direction: column;
    
  }
`
