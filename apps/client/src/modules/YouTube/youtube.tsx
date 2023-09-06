"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";

export function Youtube(): JSX.Element {
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
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
      backgroundColor="red"
      height="100vh"
      onClick={handleClick}
      onKeyDown={handleClick}
      width="100vw"
    >
      {/* {hasWindow ? (
        <ReactPlayer playing={playing} url="./mite_kure.mp4" volume={1} />
      ) : null} */}
      <Image
        alt="frame"
        height={1000}
        ref={imageRef}
        src="/green_screen.png"
        style={{ zIndex: 100, objectFit: "cover", width: "100vw" }}
        width={1000}
      />
      <Box position="absolute" top="10vh" left="20vh">
        {hasWindow ? (
          <ReactPlayer
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  controls: 0,
                  rel: 0,
                  modestbranding: 1,
                  iv_load_policy: 3,
                  fs: 0,
                  loop: 1,
                },
              },
            }}
            controls={false}
            playing={playing}
            url="https://www.youtube.com/watch?v=zO6rqiPSV2g"
          />
        ) : null}
      </Box>
    </Flex>
  );
}
