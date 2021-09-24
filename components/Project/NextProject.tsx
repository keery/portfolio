import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const NextProject = () => {
  const { t } = useTranslation("project");
  return (
    <Box
      className="arrow-next-project"
      fontFamily="Lato"
      w="11px"
      fontSize="11px"
      fontWeight="600"
      lineHeight="11px"
      letterSpacing="0.19em"
      pb="35px"
      cursor="pointer"
      whiteSpace="nowrap"
      pos="fixed"
      bottom="48px"
      left="30px"
      zIndex="300"
      color="white"
      bgRepeat="no-repeat"
      bgImage="/assets/arrow-bottom.png"
      bgSize="7px 18px"
      bgPos="center 100%"
      animation="arrowNext forwards infinite 1.2s ease-in-out"
    >
      <Text
        transform="rotate(-90deg)"
        userSelect="none"
        textTransform="uppercase"
      >
        {t("nextProject")}
      </Text>
    </Box>
  );
};

export default NextProject;
