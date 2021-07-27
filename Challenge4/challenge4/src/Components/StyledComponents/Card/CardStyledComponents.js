import styled from "styled-components";

export const Desc = styled.span`
  font-weight: 700;
`;

export const Contain = styled.div`
  width: 90%;
  margin: 0 auto 40px auto;

  h4 {
    font-size: 1.3rem;
  }
`

export const Text = styled.div`
  line-height: 12px;
`
//CARD

export const Flag = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${props => props.radius} ${props => props.radius} 0 0;
`

export const CardStyled = styled.div`
  width: 300px;
  display: inline-block;
  margin: 20px;
  background: ${props => props.elements};
  color: ${props => props.text};
  box-shadow: ${props => props.navShadow};
  border-radius: ${props => props.radius};
  @media(max-width: 400px){
    margin: 20px 0;
  }
`
