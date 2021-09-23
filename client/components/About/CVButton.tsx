import React from "react";
import { Button, Link, Text } from "@chakra-ui/react";
import Download from "public/assets/download.svg";

const CVButton = () => {
  return (
    <Link download isExternal href="/assets/pdf/cv-esnault-guillaume.pdf">
      <Button
        pos="absolute"
        left="5%"
        zIndex="55"
        leftIcon={<Download />}
        bottom="5%"
      >
        <Text pl={2}>DOWNLOAD CV</Text>
      </Button>
    </Link>
  );
};

export default CVButton;
