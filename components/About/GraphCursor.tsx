import React from "react";
import { Flex } from "@chakra-ui/react";
import Segment from "public/assets/graph-segment.svg";

const GraphCursor = () => {
  return (
    <Flex className="cursor-container">
      <Segment opacity={0} />
      <div id="cursor" />
    </Flex>
  );
};

export default GraphCursor;
