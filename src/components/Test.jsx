import React, { useState } from "react";
import styled from "styled-components";
import { useMedia } from "react-use";
import { Howl /* , Howler */ } from "howler";

import breakBeats from "../audioClips/120_stutter_breakbeats_16.mp3";
// import futureFunk from "../audioClips/120_future_funk_beats_25.mp3";
// import BassWarwick from "../audioClips/Bass_Warwick_heavy_funk_groove_120_BPM.mp3";
// import coutrySlide from "../audioClips/electric_guitar_coutry_slide_120bpm.mp3";
// import StompySlosh from "../audioClips/FUD_120_StompySlosh.mp3";
// import GrooveB from "../audioClips/GrooveB_120bpm_Tanggu.mp3";
// import MazePolitics from "../audioClips/MazePolitics_120_Perc.mp3";
// import PAS3GROOVE1 from "../audioClips/PAS3GROOVE1.03B.mp3";
// import SilentStar from "../audioClips/SilentStar_120_Em_OrganSynth.mp3";

const TestWrapper = styled.div`
  background-color: lightblue;
  border: solid red;

  @media (min-width: 480px) {
    background-color: lightgreen;
  }
`;

export default function Test() {
  const [shouldLoop, setShouldLoop] = useState(false);
  const isWide = useMedia("(min-width: 480px)");
  const sound = new Howl({
    src: [breakBeats],
    loop: shouldLoop,
  });
  //   console.log(`sound`, sound);
  const myFunc = () => {
    sound.play();
  };

  const changeLoopBoolean = () => {
    console.log(`shouldLoop`, shouldLoop);
    setShouldLoop(!shouldLoop);
  };

  return (
    <TestWrapper>
      {isWide ? <p>123</p> : <p>abc</p>}
      <button onClick={myFunc}>play</button>
      <button onClick={changeLoopBoolean}>loop</button>
      <button>stop</button>
    </TestWrapper>
  );
}
