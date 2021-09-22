import React from "react";
import { Box, Image } from "@chakra-ui/react";
import ButtonDetails from "~components/Project/ButtonDetails";
import { Project } from "~@types/api";
import { motion, MotionValue } from "framer-motion";

interface Props {
  project: Project;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

const ProjectSlide = ({ project, rotateX, rotateY }: Props) => {
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
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="sub-info">
            <div>
              <div className="subtitle">Role</div>
              <i>{project.role}</i>
            </div>
            <div>
              <div className="subtitle">Context</div>
              <i>{project.context}</i>
            </div>
            <div>
              <div className="subtitle">Stack</div>
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
