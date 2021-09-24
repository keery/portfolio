import React from "react";
import { Experience } from "~@types/api";
import SlideLink from "~components/SlideLink";
import Subtitle from "~components/Subtitle";
import { Box, HStack, Text, Flex, VStack, Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  const { t } = useTranslation("about");
  return (
    <Box className="item">
      <Heading as="h2" color="yellow.500" pb={6}>
        {experience.title}
      </Heading>
      <VStack
        alignItems="flex-start"
        spacing={6}
        className="experience-content"
      >
        <HStack spacing={10}>
          <div>
            <Subtitle>{t("when")}</Subtitle>
            <div>{experience.when}</div>
          </div>
          <div>
            <Subtitle>{t("role")}</Subtitle>
            <div>{experience.role}</div>
          </div>
          <div>
            <Subtitle>{t("website")}</Subtitle>
            <div>
              <SlideLink
                textProps={{
                  textDecoration: "underline",
                }}
                href={experience.website}
                text={experience.websiteDisplay}
              />
            </div>
          </div>
        </HStack>
        <Flex direction="column">
          <Subtitle>{t("environment")}</Subtitle>
          <Text color="white">{experience.environment}</Text>
        </Flex>
        <Flex direction="column">
          <Subtitle>{t("description")}</Subtitle>
          <Text>{t(experience.description)}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ExperienceCard;
