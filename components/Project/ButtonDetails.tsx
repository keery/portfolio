import React from "react";
import { Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const ButtonDetails = ({ href }) => {
  const { t } = useTranslation("project");

  return (
    <div className="details-projects">
      <a href={href} target="_blank">
        <div className="details-label">
          {t("more")
            .split("")
            .map((char, index) => {
              if (char === " ") return <br key={`${char}-${index}`} />;
              return (
                <div key={`${char}-${index}`}>
                  <Box
                    fontFamily="Lato"
                    as="span"
                    textTransform="uppercase"
                    transitionDelay={`${0.02 * index}s`}
                  >
                    {char}
                  </Box>
                </div>
              );
            })}
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
