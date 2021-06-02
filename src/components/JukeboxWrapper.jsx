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
  background-image: linear-gradient(darkgreen, lightblue); ;
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
  background-image: linear-gradient(red, yellow); ;
`;

const JukeboxBody = styled.div`
  align-self: center;
  justify-self: center;
  border: solid;
  height: 500px;
  width: 400px;
  display: grid;
  grid-template-columns: 47px 1fr 47px;
`;

const Columns = styled.div`
  background-image: linear-gradient(#00ff87, #60efff); ;
`;
const ButtonWrapper = styled.div`
  background-color: lightskyblue;
  border-right: solid;
  border-left: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColoredScreen = styled.div`
  color: white;
  background-color: black;
  border: solid lightblue;
  margin-bottom: 10px;
  padding: 25px;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 20px;
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.colorOne},${props.colorTwo},${props.colorThree})`};
  width: 150px;
  display: flex;
  justify-content: center;
`;

const SongNameWrapper = styled.div`
  color: white;
  background-color: black;
  padding: 1px;
  text-decoration: underline;
`;

export default function JukeboxWrapper() {
  const [song, setSong] = useState("Loop Machine");
  const [randomColor1, setRandomColor1] = useState("blue ");
  const [randomColor2, setRandomColor2] = useState("yellow");
  const [randomColor3, setRandomColor3] = useState(" red");

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
    let randomColorNumber3 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor3 = `#${randomColorNumber3}`;
    setRandomColor3(randomColor3);
  }, [song]);

  return (
    <ScreenWrapper>
      <Wrapper>
        <Inner>
          <JukeboxHead>
            <JukeboxHeadTop>
              <ColoredScreen
                colorOne={randomColor1}
                colorTwo={randomColor2}
                colorThree={randomColor3}
              >
                <SongNameWrapper>{song}</SongNameWrapper>
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
