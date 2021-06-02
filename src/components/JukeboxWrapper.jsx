import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
  grid-column: 2/3;
  @media (max-width: 650px) {
    grid-column: 1/2;
    height: 100%;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
  @media (max-width: 650px) {
    justify-content: flex-start;
  }
`;
const JukeboxHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: solid #bc13fe;
  border-bottom: none;
  height: 200px;
  width: 375px;
  margin-top: 20px;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
  /* background-image: linear-gradient(darkgreen, lightblue); */
  background-image: linear-gradient(#00ff87, #60efff);

  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
    0 0 0.5rem #bc13fe, 0 0 1rem #bc13fe, inset 0 0 0.7rem #bc13fe;

  @media (max-width: 650px) {
    margin-top: 0;
  }
`;

const JukeboxHeadTop = styled.div`
  width: 300px;
  height: 150px;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border: 3px solid;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: linear-gradient(#d62b31, lightyellow);
`;
//
const JukeboxBody = styled.div`
  align-self: center;
  justify-self: center;
  border: solid;
  height: 450px;
  width: 375px;
  display: grid;
  grid-template-columns: 35px 1fr 35px;
`;

const Columns = styled.div`
  background-image: linear-gradient(#00ff87, #60efff);
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
    0 0 0.5rem #bc13fe, 0 0 1rem #bc13fe, inset 0 0 0.7rem #bc13fe;
`;
const ButtonWrapper = styled.div`
  background-image: linear-gradient(#2a0a01, #5a2400);
  border-right: solid;
  border-left: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColoredScreen = styled.div`
  color: white;
  background-color: black;
  border: solid black;
  border-bottom: none;
  padding: 50px;
  padding-bottom: 10px;
  font-weight: bolder;
  font-size: 20px;
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.colorOne},${props.colorTwo})`};
  transform: 0.5s;
  width: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
`;
const ScreenText = styled.p`
  margin: 0;
  color: white;
  padding: 1px;
  text-decoration: underline;
`;

export default function JukeboxWrapper() {
  const [song, setSong] = useState("Loop Machine");
  const [randomColor1, setRandomColor1] = useState("blue ");
  const [randomColor2, setRandomColor2] = useState("yellow");

  const changeSongName = (value) => {
    setSong(value);
  };

  useEffect(() => {
    let randomColorNumber1 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor1 = `#${randomColorNumber1}`;
    setRandomColor1(randomColor1);
    let randomColorNumber2 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = `#${randomColorNumber2}`;
    setRandomColor2(randomColor2);
  }, [song]);

  return (
    <ScreenWrapper>
      <Wrapper>
        <Inner>
          <JukeboxHead>
            <JukeboxHeadTop>
              <ColoredScreen colorOne={randomColor1} colorTwo={randomColor2}>
                <ScreenText>{song}</ScreenText>
                <ScreenText>Jukebox</ScreenText>
              </ColoredScreen>
            </JukeboxHeadTop>
          </JukeboxHead>
          <JukeboxBody>
            <Columns></Columns>
            <ButtonWrapper>
              <PadWrapper changeSongName={changeSongName} />
            </ButtonWrapper>
            <Columns></Columns>
          </JukeboxBody>
        </Inner>
      </Wrapper>
    </ScreenWrapper>
  );
}
