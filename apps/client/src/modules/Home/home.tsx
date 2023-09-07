"use client";
import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useState } from "react";
import { h1 } from "../../theme/font-sizes";

export function Home(): JSX.Element {
  const [url, setUrl] = useState("");
  const [showView, setShowView] = useState(false);
  const [error, setError] = useState(false);
  const generate = (): void => {
    try {
      const _ = new URL(url);
      setShowView(true);
      setError(false);
    } catch (err) {
      setShowView(false);
      setError(true);
    }
  };
  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/watch?url=${url}`
    );
  };
  return (
    <Flex
      alignItems="center"
      flexDir="column"
      h="100vh"
      justifyContent="center"
      w="100vw"
    >
      <Text fontSize={h1} fontWeight="bold" mb="7vh">
        MITE KURE Generator
      </Text>
      <Flex gap="2vw" justify="center" mb="4vh" w="100%">
        <FormControl isInvalid={error} width="50%">
          <Input
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="YouTube URL"
            value={url}
          />
          {error ? <FormErrorMessage>URL is not valid</FormErrorMessage> : null}
        </FormControl>
        <Button colorScheme="yellow" onClick={generate}>
          Generate
        </Button>
      </Flex>

      {showView ? (
        <Flex gap="1vw" justify="center" w="100%">
          <Input
            placeholder="YouTube URL"
            readOnly
            value={`${window.location.origin}watch?url=${url}`}
            w="50%"
          />
          <Button>
            <CopyIcon onClick={() => void copy()} />
          </Button>
          <Link
            href={`${window.location.origin}/watch?url=${url}`}
            target="_blank"
          >
            <Button>View</Button>
          </Link>
        </Flex>
      ) : null}
    </Flex>
  );
}
