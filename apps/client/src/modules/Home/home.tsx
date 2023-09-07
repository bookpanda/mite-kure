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
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { h1 } from "../../theme/font-sizes";

export function Home(): JSX.Element {
  const [url, setUrl] = useState("");
  const [showView, setShowView] = useState(false);
  const [error, setError] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

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
      {hasWindow ? (
        <ReactPlayer
          controls={false}
          height="100%"
          loop
          muted
          playing
          style={{
            position: "absolute",
            zIndex: -1,
            filter: "blur(8px) opacity(0.5)",
          }}
          url="./mite_kure.mp4"
          width="100%"
        />
      ) : null}
      <Text color="black" fontSize={h1} fontWeight="bold" mb="7vh">
        MITE KURE Generator
      </Text>
      <Flex gap="2vw" justify="center" mb="4vh" w="100%">
        <FormControl isInvalid={error} width="50%">
          <Input
            _placeholder={{ color: "gray.600" }}
            borderColor="gray.600"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="YouTube URL"
            textColor="black"
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
            borderColor="gray.600"
            placeholder="YouTube URL"
            readOnly
            textColor="black"
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
