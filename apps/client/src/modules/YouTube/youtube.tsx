"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const playerWidth =
    (imageRef.current ? imageRef.current.clientWidth : 200) * 0.72;
  const playerHeight =
    (imageRef.current ? imageRef.current.clientHeight : 100) * 0.8;
  const offsetTop =
    (imageRef.current ? imageRef.current.clientHeight : 100) * 0.1;
  const offsetLeft =
    (imageRef.current ? imageRef.current.clientWidth : 200) * 0.07;
  return (
    <Flex
      bgColor="black"
      onClick={handleClick}
      onKeyDown={handleClick}
      width="100vw"
    >
      <Image
        alt="frame"
        height={1000}
        ref={imageRef}
        src="/green_screen.png"
        style={{ zIndex: 100, height: "100%", width: "100%" }}
        width={1000}
      />
      <Box
        bgColor="black"
        height={playerHeight}
        left={offsetLeft}
        position="absolute"
        top={offsetTop}
        transform={`rotate(-4.5deg)`}
        width={playerWidth}
      >
        {hasWindow ? (
          <YouTubePlayer
            controls={false}
            height="100%"
            playing={playing}
            url="https://www.youtube.com/watch?v=zO6rqiPSV2g"
            width="100%"
          />
        ) : null}
      </Box>
    </Flex>
  );
}
