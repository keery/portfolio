import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import Link, { Props as LinkProps } from "~components/Link";

interface Props extends LinkProps {
  href: string;
  text: string;
  withOpacity?: boolean;
  textProps?: TextProps;
}

const SlideLink = ({ href, text, withOpacity, textProps, ...rest }: Props) => {
  return (
    <Link
      role="group"
      href={href}
      {...rest}
      verticalAlign="bottom"
      display="inline-block"
      textDecoration="none"
      overflow="hidden"
      position="relative"
    >
      <Text
        {...textProps}
        opacity={withOpacity ? 0.6 : 1}
        transform="translateY(0)"
        transition="transform ease-in-out 0.2s"
        _groupHover={{
          transform: "translateY(-110%)",
        }}
      >
        {text}
      </Text>
      <Text
        {...textProps}
        color="yellow.500"
        pos="absolute"
        top="110%"
        left="0"
        transition="top ease-in-out 0.2s"
        _groupHover={{
          top: 0,
        }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default SlideLink;
