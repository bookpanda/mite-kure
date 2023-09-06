"use client";

import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";

export function Youtube(): JSX.Element {
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
    <Flex onClick={handleClick}>
      {/* <YouTubePlayer url="https://www.youtube.com/watch?v=zO6rqiPSV2g" /> */}
      {hasWindow ? (
        <ReactPlayer playing={playing} url="./mite_kure.mp4" volume={1} />
      ) : null}
    </Flex>
  );
}
