"use client";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppContext } from "../../core/context/app-context";
import { Intro } from "../Intro";
import { Youtube } from "../YouTube";

export function Watch(): JSX.Element {
  const { setIntroDone, introDone, setStartYouTube } = useAppContext();
  useEffect(() => {
    setIntroDone(false);
    setStartYouTube(false);
  }, [setIntroDone, setStartYouTube]);

  return (
    <Flex alignItems="center" h="100vh" justifyContent="center" w="100vw">
      {!introDone && <Intro />}
      <Youtube />
    </Flex>
  );
}
