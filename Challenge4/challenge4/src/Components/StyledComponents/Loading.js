import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  background: ${props => props.background};
  height: 100vh;
  width: 100%;
  margin-top: 20px;
`

export const Loading = styled.div`
    width: 200px;
    height: 200px;
    position:absolute;
    left:0;
    right:0;
    margin: auto;
    top: 30%;
    border: 10px solid transparent;
    border-left-color: red;
    border-bottom-color: red;
    border-radius: 100%;
    animation: ${rotate} 0.5s linear infinite;
`

