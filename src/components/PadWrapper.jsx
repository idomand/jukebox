import React, { useState } from "react";
import styled from "styled-components";
import { arrayOfSounds } from "../audioClips";

const Wrapper = styled.section`
  /* background-color: lightgrey; */
  display: grid;
  grid-template-columns: repeat(3, minmax(75px, 1fr));
  grid-gap: 3px;
  padding: 5px;
  margin-top: 15px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
export const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  font-size: 20px;
  color: white;
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }
`;

const StopButton = styled(Button)`
  background-color: red;
`;

const PlayButton = styled(Button)`
  background-color: lightgreen;
`;

const Pad = styled.button`
  border: solid 1px;
  cursor: pointer;
  outline: none;
  border-radius: 3px;

  transition: fill 0.25s;
  background-color: ${(props) => (props.isPicked ? "#E9EB80" : "#EBA26F")};
  background-color: ${(props) =>
    props.cardPlayingNow && props.isPicked ? "red" : "null"};
  &:hover {
    background-color: lightblue;
  }
`;
const PadText = styled.p`
  margin: 5px 0 5px 0;
  outline: none;
`;

export default function PadWrapper({ changeSongName }) {
  const [playlistArray, setPlaylistArray] = useState([]);
  const [cardPlayingNow, setCardPlayingNow] = useState("");
  // const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const renderPads = () => {
    const arrayOfPads = arrayOfSounds.map((element) => {
      return (
        <Pad
          key={element.name}
          onClick={() => {
            handlePadClick(element);
          }}
          name={element.name}
          cardPlayingNow={cardPlayingNow === element.name}
          isPicked={playlistArray.some((pad) => pad.name === element.name)}
        >
          <PadText>{element.name}</PadText>
        </Pad>
      );
    });
    return arrayOfPads;
  };

  let counter = 0;

  const playMusicFromPlaylist = () => {
    if (counter < playlistArray.length) {
      setCardPlayingNow(playlistArray[counter].name);
      changeSongName(playlistArray[counter].name);

      playlistArray[counter].sound.play();
      playlistArray[counter].sound.on("end", () => {
        counter++;
        smallStopMusic();
        playMusicFromPlaylist();
      });
    } else {
      counter = 0;
      smallStopMusic();
      playMusicFromPlaylist();
    }
  };

  const handlePadClick = (clip) => {
    if (playlistArray.some((element) => element.name === clip.name)) {
      setPlaylistArray(
        playlistArray.filter((element) => element.name !== clip.name)
      );
    } else {
      setPlaylistArray((playlistArray) => {
        return [...playlistArray, clip];
      });
    }
  };

  const smallStopMusic = () => {
    arrayOfSounds.forEach((element) => {
      element.sound.stop();
    });
  };
  const bigStopMusic = () => {
    arrayOfSounds.forEach((element) => {
      element.sound.stop();
    });
    changeSongName("Loop Machine");
    setCardPlayingNow("");
    setPlaylistArray([]);
  };

  const playMusic = () => {
    playMusicFromPlaylist();
  };

  return (
    <>
      <Wrapper>{renderPads()}</Wrapper>
      <ButtonDiv>
        <div>
          <PlayButton onClick={playMusic}>Play </PlayButton>
        </div>
        <div>
          <StopButton onClick={bigStopMusic}>Stop</StopButton>
        </div>
      </ButtonDiv>
    </>
  );
}
