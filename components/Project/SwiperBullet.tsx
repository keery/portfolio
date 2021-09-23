import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  className: string;
  title: string;
  number: number;
}

const SwiperBullet = ({ className, number, title }: Props) => {
  return (
    <Box className={`${className}`} userSelect="none">
      <b>{`${number + 1 < 10 && "0"}${number + 1}`}</b>
      <Flex as="span" alignItems="center">
        <div className="mask-text">
          <div>{title}</div>
        </div>
      </Flex>
    </Box>
  );
};

export default SwiperBullet;
