import React, { useState } from "react";
import styled from "styled-components";
// import { useMedia } from "react-use";
import { Card } from "./common/Cards";
import { arrayOfAudioClips } from "../audioClips";
import { Howl /* , Howler */ } from "howler";

const Wrapper = styled.section`
  background-color: lightgrey;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
`;

const ButtonDiv = styled.div`
  border: solid red;
`;
export default function PadWrapper() {
  const [audioPicked, setAudioPicked] = useState(undefined);
  const [audioNamePicked, setAudioNamePicked] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const changeClip = (clip) => {
    setAudioPicked(clip.src);
    setAudioNamePicked(clip.name);
  };

  const renderPads = () => {
    const arrayOfCards = arrayOfAudioClips.map((element) => {
      return (
        <Card
          key={element.name}
          onClick={() => {
            changeClip(element);
          }}
          name={element.name}
          cardPicked={audioNamePicked}
        >
          <p>{element.name}</p>
        </Card>
      );
    });
    return arrayOfCards;
  };

  const sound = new Howl({
    src: [audioPicked],
  });

  const stopMusic = () => {
    console.log("trying to stop the music");
    sound.stop();
    sound.pause();
  };

  sound.on("end", function () {
    console.log("Finished!");
    setIsPlaying(false);
  });
  const playMusic = () => {
    if (isPlaying) {
      return;
    } else {
      sound.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Wrapper>{renderPads()}</Wrapper>
      <ButtonDiv>
        <button onClick={playMusic}>play</button>
        <button onClick={stopMusic}>stop</button>
      </ButtonDiv>
    </>
  );
}
