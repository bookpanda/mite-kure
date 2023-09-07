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
    const setOffClick = setTimeout(() => {
      imageRef.current?.click();
    }, 200);

    return () => {
      clearTimeout(setOffClick);
    };
  }, []);

  const handleClick = (): void => {
    setPlaying(!playing);
  };

  return (
    <Flex
      bgColor="black"
      onClick={handleClick}
      onKeyDown={handleClick}
      overflow="hidden"
      position="relative"
      width="100vw"
    >
      <Image
        alt="frame"
        height={1000}
        ref={imageRef}
        src="/green_screen.png"
        style={{
          zIndex: 100,
          height: "100%",
          width: "100%",
        }}
        width={1000}
      />
      <Box
        bgColor="black"
        height="92%"
        left="7%"
        position="absolute"
        top="3%"
        transform="rotate(-4.5deg)"
        width="78%"
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
