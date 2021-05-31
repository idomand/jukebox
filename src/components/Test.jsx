import React from "react";
import styled from "styled-components";
import { useMedia } from "react-use";
import { Howl, Howler } from "howler";
import mySound from "../audioClips/120_stutter_breakbeats_16.mp3";
const TestWrapper = styled.div`
  background-color: lightblue;
  border: solid red;

  @media (min-width: 480px) {
    background-color: lightgreen;
  }
`;

export default function Test() {
  const isWide = useMedia("(min-width: 480px)");
  const sound = new Howl({
    src: [mySound],
  });
  console.log(`mySound`, mySound);

  const myFunc = () => {
    sound.play();
  };

  return (
    <TestWrapper>
      {isWide ? <p>123</p> : <p>abc</p>}
      <button onClick={myFunc}>play</button>
      <button>pause</button>
      <button>stop</button>
    </TestWrapper>
  );
}
