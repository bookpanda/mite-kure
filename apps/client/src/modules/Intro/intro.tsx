"use client";

import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useAppContext } from "../../core/context/app-context";

export function Intro(): JSX.Element {
  const { setIntroDone } = useAppContext();
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
  return (
    <Flex
      bgColor="black"
      onClick={handleClick}
      onKeyDown={handleClick}
      width="100vw"
    >
      {hasWindow ? (
        <ReactPlayer
          controls={false}
          height="100%"
          onEnded={() => {
            setIntroDone(true);
          }}
          playing={playing}
          url="./mite_kure.mp4"
          width="100%"
        />
      ) : null}
    </Flex>
  );
}
