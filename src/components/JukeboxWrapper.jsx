import React, { useState } from "react";
import styled from "styled-components";
// import { useMedia } from "react-use";
import { arrayOfAudioClips } from "../audioClips";
import { Howl /* , Howler */ } from "howler";

const Wrapper = styled.section`
  background-color: lightgrey;
  border: solid blue;
  height: 50vh;
`;

const Card = styled.button`
  width: 150px;
  border: solid;
  border-radius: 15px;
  background-color: ${(props) =>
    props.name === props.cardPicked ? "lightblue" : "#5ebffc"};
  margin: 20px;
  cursor: pointer;

  &:hover {
    background-color: lightskyblue;
  }
`;

export default function JukeboxWrapper() {
  const [audioPicked, setAudioPicked] = useState(undefined);
  const [audioNamePicked, setAudioNamePicked] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const changeClip = (clip) => {
    setAudioPicked(clip.src);
    setAudioNamePicked(clip.name);
  };

  const renderCard = () => {
    const arrayOfCards = arrayOfAudioClips.map((element) => {
      return (
        <Card
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

  sound.on("end", function () {
    console.log("Finished!");
  });

  const playMusic = () => {
    if (isPlaying) {
      return;
    } else {
      console.log("in play music");
      sound.play();
      setIsPlaying(true);
    }
  };

  const stopMusic = () => {
    if (isPlaying) {
      console.log("in stop music");
      sound.pause();
      setIsPlaying(false);
    } else {
      return;
    }
  };

  return (
    <Wrapper>
      {renderCard()}
      <div>
        <button onClick={playMusic}>play</button>
        <button onClick={stopMusic}>stop</button>
      </div>
    </Wrapper>
  );
}
