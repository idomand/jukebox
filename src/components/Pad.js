import styled from "styled-components";

export const Pad = styled.button`
  border: solid 1px;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => (props.isAAAAAAAA ? "yellow" : "white")};
  &:hover {
    background-color: lightblue;
  }
`;
