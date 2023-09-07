"use client";

import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useAppContext } from "../../core/context/app-context";

export function Intro(): JSX.Element {
  const { setIntroDone, setStartYouTube, introDone } = useAppContext();
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
      setPlaying(true);
    }
  }, []);

  const handleClick = (): void => {
    setPlaying(!playing);
  };

  const handleEnd = (playedSeconds: number): void => {
    if (playedSeconds > 4) setStartYouTube(true);
  };

  return (
    <Flex
      bgColor="black"
      onClick={handleClick}
      onKeyDown={handleClick}
      position={introDone ? "absolute" : "fixed"}
      visibility={introDone ? "hidden" : "visible"}
      width="100vw"
    >
      {hasWindow ? (
        <ReactPlayer
          controls={false}
          height="100%"
          onEnded={() => {
            setIntroDone(true);
          }}
          onProgress={(progress) => {
            handleEnd(progress.playedSeconds);
          }}
          playing={playing}
          url="./mite_kure.mp4"
          width="100%"
        />
      ) : null}
    </Flex>
  );
}
