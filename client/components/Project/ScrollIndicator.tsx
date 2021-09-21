import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const ScrollIndicator = () => {
  return (
    <Flex
      className="scroll-btn"
      border="1px solid white"
      borderRadius="100%"
      textTransform="uppercase"
      textAlign="center"
      color="white"
      fontSize="8px"
      padding="5px 10px"
      display="block"
      width="78px"
      height="78px"
      margin="0 auto"
      letterSpacing="1px"
      position="absolute"
      zIndex="12"
      left="50%"
      transform="translateX(-50%)"
      bottom="15px"
      bgColor="rgba(247, 247, 247, 0.168)"
      _before={{
        content: '""',
        position: "absolute",
        left: "-1px",
        right: "-1px",
        top: "-1px",
        bottom: "-1px",
        border: "1px solid white",
        borderRadius: "100%",
        animation: "squareFade 0.7s infinite",
      }}
    >
      <Image
        src="/assets/scroll.svg"
        alt="mouse icon"
        w="22px"
        mb="8px"
        mx="auto"
        animation="bound 1.4s infinite"
      />
      <Text className="scrollText">scroll</Text>
    </Flex>
  );
};

export default ScrollIndicator;
