import React from "react";
import Segment from "public/assets/graph-segment.svg";
import { Experience } from "~@types/api";
import { Image, Box, Flex } from "@chakra-ui/react";

interface Props {
  experiences: [Experience, Experience] | [Experience];
}

const GraphSegment = ({ experiences }: Props) => {
  return (
    <Box h="100%" pos="relative" w="fit-content" className="graph-segment">
      <Flex
        pos="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        px="15%"
      >
        {experiences.map(({ image, imageProps, title }, index) => (
          <Flex
            key={`segment-${title}`}
            justifyContent="center"
            w="100%"
            height="14.7%"
            mt={index === 0 && "80.5%"}
            mb={index === 1 && "80.5%"}
          >
            <Image
              src={`/assets/${image}`}
              {...imageProps}
              alignSelf="center"
            />
          </Flex>
        ))}
      </Flex>
      <Segment height="100%" />
    </Box>
  );
};

export default GraphSegment;
