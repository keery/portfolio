import React from "react";
import { Heading, Flex, Image } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <Flex alignItems="center" justifyContent="center" h="100%">
      <NextSeo title="404" />
      <Heading fontSize="5rem">404</Heading>
      <Image
        src="assets/tetes-a-claque.png"
        pos="absolute"
        left="50%"
        transform={{ base: "translateX(-50%)" }}
        bottom="0"
        maxH="40vh"
      />
    </Flex>
  );
}
