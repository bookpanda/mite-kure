"use client";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Home(): JSX.Element {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const handleClick = (): void => {
    router.push(`/watch?url=${url}`);
  };
  return (
    <Flex alignItems="center" h="100vh" justifyContent="center" w="100vw">
      home
      <Input
        placeholder="YouTube URL"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <Button onClick={handleClick}>go</Button>
    </Flex>
  );
}
