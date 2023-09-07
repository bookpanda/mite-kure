"use client";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppContext } from "../../core/context/app-context";
import { Intro } from "../Intro";
import { Youtube } from "../YouTube";

export function Home(): JSX.Element {
  const { introDone, setIntroDone } = useAppContext();
  useEffect(() => {
    setIntroDone(false);
  }, [setIntroDone]);

  return (
    <Flex alignItems="center" h="100vh" justifyContent="center" w="100vw">
      {!introDone ? <Intro /> : <Youtube />}
    </Flex>
  );
}
