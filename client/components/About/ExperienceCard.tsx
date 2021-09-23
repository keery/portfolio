import React from "react";
import { Experience } from "~@types/api";
import SlideLink from "~components/SlideLink";
import { Box, HStack } from "@chakra-ui/react";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <Box className="item">
      <h2>{experience.title}</h2>
      <HStack className="sub-info" spacing={10}>
        <div>
          <div className="subtitle">When</div>
          <i>
            <div>{experience.when}</div>
          </i>
        </div>
        <div>
          <div className="subtitle">Role</div>
          <i>
            <div>{experience.role}</div>
          </i>
        </div>
        <div>
          <div className="subtitle">Website</div>
          <i>
            <div>
              <SlideLink
                textProps={{
                  textDecoration: "underline",
                }}
                href={experience.website}
                text={experience.websiteDisplay}
              />
            </div>
          </i>
        </div>
      </HStack>
      <p className="about-text">{experience.description}</p>
    </Box>
  );
};

export default ExperienceCard;
