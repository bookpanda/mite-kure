"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import YouTubePlayer from "react-player/youtube";

export function Youtube(): JSX.Element {
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoSize = useRef({
    width: 0,
    height: 0,
    offsetTop: 0,
    offsetLeft: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
      setPlaying(true);
    }
    const setOffClick = setTimeout(() => {
      imageRef.current?.click();
    }, 200);

    const checkInterval = setInterval(() => {
      if (typeof window !== "undefined") {
        videoSize.current = {
          width: (imageRef.current ? imageRef.current.clientWidth : 200) * 0.72,
          height:
            (imageRef.current ? imageRef.current.clientHeight : 100) * 0.8,
          offsetTop:
            (imageRef.current ? imageRef.current.clientHeight : 100) * 0.1,
          offsetLeft:
            (imageRef.current ? imageRef.current.clientWidth : 200) * 0.07,
        };
      }
    }, 100);

    return () => {
      clearInterval(checkInterval);
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
        height={videoSize.current.height}
        left={videoSize.current.offsetLeft}
        position="absolute"
        top={videoSize.current.offsetTop}
        transform="rotate(-4.5deg)"
        width={videoSize.current.width}
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
