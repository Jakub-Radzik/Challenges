import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  
  @media(max-width:900px){
    flex-direction: column;
    justify-content: center;
  }
  
`

export const ThemeButton = styled.img`
  width: 20px;
  margin-right: 10px;
`

export const Toggler = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  line-height: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
`

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background: ${props => props.elements};
  color: ${props => props.text};
  box-shadow: ${props => props.navShadow};
  -webkit-box-shadow: ${props => props.navShadow};
  
  @media(max-width:900px){
    height: 150px;
  }
`;
