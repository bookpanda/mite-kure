"use client";
import { Flex } from "@chakra-ui/react";
import { Intro } from "../Intro";
import { Youtube } from "../YouTube";

export function Watch(): JSX.Element {
  return (
    <Flex alignItems="center" h="100vh" justifyContent="center" w="100vw">
      <Intro />
      <Youtube />
    </Flex>
  );
}
