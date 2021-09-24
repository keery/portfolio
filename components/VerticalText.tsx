import React from "react";
import { Circle, HStack } from "@chakra-ui/react";
import { GITHUB, INSTAGRAM, LINKEDIN } from "~constants";
import SlideLink from "~components/SlideLink";

const VerticalText = () => {
  return (
    <HStack
      fontFamily="Lato"
      pos="absolute"
      top="50%"
      left="5%"
      letterSpacing={1.5}
      fontSize="11px"
      color="white"
      whiteSpace="nowrap"
      className="vertical-text"
      spacing={6}
      divider={
        <Circle
          className="circle"
          size="8px"
          bgColor="yellow.500"
          opacity="0"
          transform="scale(0)"
        />
      }
    >
      <SlideLink href={GITHUB} text="GITHUB" isExternal />
      <SlideLink href={LINKEDIN} text="LINKEDIN" isExternal />
      <SlideLink href={INSTAGRAM} text="INSTAGRAM" isExternal />
    </HStack>
  );
};

export default VerticalText;
