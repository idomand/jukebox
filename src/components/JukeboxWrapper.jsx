import React from "react";
import styled from "styled-components";
// import { useMedia } from "react-use";
import PadWrapper from "./PadWrapper";
const ScreenWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  background-color: lightgrey;
  border: solid;
  grid-column: 2/3;
  @media (max-width: 650px) {
    grid-column: 1/2;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
`;
const JukeboxHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: solid;
  height: 200px;
  width: 400px;
  margin-top: 20px;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
  /* background-color: lightgreen; */
  background-image: linear-gradient(darkgreen, lightblue); ;
`;

const JukeboxHeadTop = styled.div`
  width: 300px;
  height: 150px;
  background-color: gold;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border: 3px solid;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(red, yellow); ;
`;

const JukeboxBody = styled.div`
  align-self: center;
  justify-self: center;
  border: solid;
  height: 500px;
  width: 400px;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
`;

const Columns = styled.div`
  /* border: solid yellow; */
  /* background-color: lightgreen; */
  background-image: linear-gradient(#00ff87, #60efff); ;
`;
const ButtonWrapper = styled.div`
  background-color: lightskyblue;
  border: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function JukeboxWrapper() {
  return (
    <ScreenWrapper>
      <Wrapper>
        <Inner>
          <JukeboxHead>
            <JukeboxHeadTop>11</JukeboxHeadTop>
          </JukeboxHead>
          <JukeboxBody>
            <Columns></Columns>
            <ButtonWrapper>
              <PadWrapper />
            </ButtonWrapper>
            <Columns></Columns>
          </JukeboxBody>
        </Inner>
      </Wrapper>
    </ScreenWrapper>
  );
}
