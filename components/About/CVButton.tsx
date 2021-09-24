import React from "react";
import { Button, Link, Text } from "@chakra-ui/react";
import Download from "public/assets/download.svg";
import { useTranslation } from "next-i18next";

const CVButton = () => {
  const { t } = useTranslation("about");
  return (
    <Link download isExternal href="/assets/pdf/cv-esnault-guillaume.pdf">
      <Button
        pos="absolute"
        left="5%"
        zIndex="55"
        leftIcon={<Download />}
        bottom="5%"
      >
        <Text pl={2} textTransform="uppercase" fontFamily="Lato">
          {t("cv")}
        </Text>
      </Button>
    </Link>
  );
};

export default CVButton;
