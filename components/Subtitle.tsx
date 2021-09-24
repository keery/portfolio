import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

const Subtitle = ({ children, ...rest }: TextProps) => {
  return (
    <Text
      {...rest}
      color="yellow.500"
      textTransform="uppercase"
      mb={2}
      fontFamily="Fjalla one"
    >
      {children}
    </Text>
  );
};

export default Subtitle;
