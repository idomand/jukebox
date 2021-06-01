import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { arrayOfSounds } from "../audioClips";

const Pad = styled.button`
  border: solid 1px;
  cursor: pointer;
  outline: none;
  transition: fill 0.25s;
  background-color: ${(props) => (props.isPicked ? "yellow" : "white")};
  background-color: ${(props) =>
    props.cardPlayingNow && props.isPicked ? "red" : "null"};
  &:hover {
    background-color: lightblue;
  }
`;
const Wrapper = styled.section`
  background-color: lightgrey;
  display: grid;
  grid-template-columns: repeat(3, minmax(75px, 1fr));
  grid-gap: 3px;
  padding: 5px;
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
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const PlayAllButton = styled(Button)`
  background-color: green;
`;

const StopButton = styled(Button)`
  background-color: red;
`;

export default function PadWrapper() {
  const [playlistArray, setPlaylistArray] = useState([]);
  const [cardPlayingNow, setCardPlayingNow] = useState("");
  // const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    console.log("this is useEffect");
  }, []);

  let counter = 0;
  console.log(`cardPlayingNow`, cardPlayingNow);

  const playMusicFromPlaylist = () => {
    if (counter < playlistArray.length) {
      console.log(`counter`, counter);
      console.log(`playlistArray.length`, playlistArray.length);
      console.log(`playlistArray[counter]`, playlistArray[counter]);
      setCardPlayingNow(playlistArray[counter].name);
      playlistArray[counter].sound.play();
      playlistArray[counter].sound.on("end", () => {
        counter++;
        stopMusic();
        playMusicFromPlaylist();
      });
    } else {
      console.log("this is the restart of the loop");
      counter = 0;
      console.log(`counter`, counter);
      console.log(`playlistArray.length`, playlistArray.length);
      console.log(`playlistArray[counter]`, playlistArray[counter]);
      stopMusic();
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
    /*     if (playlistArray.length !== 0) {
      playMusicFromPlaylist();
    }
 */
  };

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
          <p>{element.name}</p>
        </Pad>
      );
    });
    return arrayOfPads;
  };

  const stopMusic = () => {
    arrayOfSounds.forEach((element) => {
      element.sound.stop();
    });
    setPlaylistArray([]);
  };
  const playAll = () => {
    console.log("play all");
    playMusicFromPlaylist();
  };
  return (
    <>
      <Wrapper>{renderPads()}</Wrapper>
      <ButtonDiv>
        <div>
          <PlayAllButton onClick={playAll}>Play All</PlayAllButton>
        </div>
        <div>
          <StopButton onClick={stopMusic}>Stop</StopButton>
        </div>
      </ButtonDiv>
    </>
  );
}
