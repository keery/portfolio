import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
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
      <div className="overlay"></div>
      <div className="img-circle-container">
        <div className="img-circle-container-border">
          <Box className="img-circle" bgImage={project.bg} />
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
          <Heading as="h2">{project.title}</Heading>
          <p>{t(project.description)}</p>
          <div className="sub-info">
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
          </div>
        </div>
      </motion.div>
      <ButtonDetails href={project.link} />
    </Box>
  );
};

export default ProjectSlide;
