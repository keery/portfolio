import React from "react";
import { Box, Image, Heading, Text, HStack } from "@chakra-ui/react";
import ButtonDetails from "~components/Project/ButtonDetails";
import { Project } from "~@types/api";
import { motion, MotionValue } from "framer-motion";
import { useTranslation } from "next-i18next";
import Subtitle from "~components/Subtitle";

interface Props {
  project: Project;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

const ProjectSlide = ({ project, rotateX, rotateY }: Props) => {
  const { t } = useTranslation("project");
  return (
    <Box bgImage={project.bg} className={`project-slide`}>
      <Box className="overlay" display={{ base: "none", md: "block" }} />
      <div className="img-circle-container">
        <div className="img-circle-container-border">
          <Box
            className="img-circle"
            bgImage={project.bg}
            _before={{
              content: "''",
              display: { base: "block", md: "none" },
              pos: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              bgColor: "rgb(0 0 0 / 56%)",
            }}
          />
        </div>
      </div>
      <motion.div
        className="perspective-container"
        style={{
          rotateX,
          rotateY,
        }}
      >
        <div className="pic-project">
          <Image src={project.logo} />
        </div>
        <div className="info-projet-container">
          <Heading as="h2" pb={{ base: 2, md: 0 }}>
            {project.title}
          </Heading>
          <Text lineHeight={{ base: "1.3", md: "unset" }}>
            {t(project.description)}
          </Text>
          <HStack className="sub-info" spacing={4}>
            <div>
              <Subtitle>Role</Subtitle>
              <i>{project.role}</i>
            </div>
            <div>
              <Subtitle>Context</Subtitle>
              <i>{t(project.context)}</i>
            </div>
            <div>
              <Subtitle>Stack</Subtitle>
              <i>{project.stack}</i>
            </div>
          </HStack>
        </div>
      </motion.div>
      <ButtonDetails href={project.link} />
    </Box>
  );
};

export default ProjectSlide;
