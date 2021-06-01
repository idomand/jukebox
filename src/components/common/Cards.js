import styled from "styled-components";

export const Card = styled.button`
  /* width: 150px; */
  border: solid;
  /* border-radius: 15px; */
  background-color: ${(props) =>
    props.name === props.cardPicked ? "lightblue" : "#5ebffc"};
  /* margin: 20px; */
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: lightblue;
  }
`;
