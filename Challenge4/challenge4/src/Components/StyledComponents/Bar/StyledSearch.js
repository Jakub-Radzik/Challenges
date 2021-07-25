import styled from "styled-components";

export const Search = styled.input`
  width: 500px;
  font-size: 1.25rem;
  height: 100%;
  margin-left: 20px;
  background: transparent;
  border: 0;
  outline: 0;
  border-radius: 10px;
  color: ${props => props.input};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.input};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${props => props.input};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${props => props.input};
  }
`