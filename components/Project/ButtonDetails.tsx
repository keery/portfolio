import React from "react";
import { Box } from "@chakra-ui/react";

const ButtonDetails = ({ href }) => {
  return (
    <div className="details-projects">
      <a href={href} target="_blank">
        <div className="details-label">
          <div>
            <Box as="span" transitionDelay="0s">
              M
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.02s">
              O
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.04s">
              R
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.06s">
              E
            </Box>
          </div>
          <br />
          <div>
            <Box as="span" transitionDelay="0.08s">
              D
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.1s">
              E
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.12s">
              T
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.16s">
              A
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.18s">
              I
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.2s">
              L
            </Box>
          </div>
          <div>
            <Box as="span" transitionDelay="0.22s">
              S
            </Box>
          </div>
        </div>
        <div className="details-arrow" />
        <svg
          className="details-circle"
          width="98"
          height="98"
          viewBox="0 0 100 100"
        >
          <circle
            className="c1"
            cx="49"
            cy="49"
            r="47"
            stroke="#fff"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </a>
    </div>
  );
};

export default ButtonDetails;
