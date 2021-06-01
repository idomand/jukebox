import React, { useState } from "react";
import styled from "styled-components";
import { arrayOfSounds } from "../audioClips";
import { Howl } from "howler";

const Pad = styled.button`
  border: solid 1px;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => (props.isPicked ? "yellow" : "white")};
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
  border: solid;
`;
export default function PadWrapper() {
  const [audioNamePicked, setAudioNamePicked] = useState(undefined);
  const [playlistArray, setPlaylistArray] = useState([]);
  const [trackNumber, setTrackNumber] = useState(0);

  console.log(`arrayOfSounds`, arrayOfSounds);

  console.log(`playlistArray`, playlistArray);

  const playMusicFromPlaylist = () => {
    if (playlistArray.length !== 0) {
      playlistArray.forEach((element) => {});
    }
  };

  const handlePadClick = (clip) => {
    console.log(`clip`, clip);
    if (playlistArray.includes(clip.name)) {
      console.log("needToRemove");
      setPlaylistArray(
        playlistArray.filter((element) => element !== clip.name)
      );
    } else {
      console.log("needToAdd");
      setPlaylistArray((playlistArray) => {
        return [...playlistArray, clip.name];
      });
    }
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
          cardPicked={audioNamePicked}
          isPicked={playlistArray.includes(element.name)}
        >
          <p>{element.name}</p>
        </Pad>
      );
    });
    return arrayOfPads;
  };

  return (
    <>
      <Wrapper>{renderPads()}</Wrapper>
      <ButtonDiv>
        <div>
          <button onClick={playMusicFromPlaylist}>play playlist</button>
        </div>
      </ButtonDiv>
    </>
  );
}
