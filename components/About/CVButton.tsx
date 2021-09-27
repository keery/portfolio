import React from "react";
import { Button, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const CVButton = () => {
  const { t } = useTranslation("about");
  return (
    <Link download isExternal href="/assets/pdf/cv-esnault-guillaume.pdf">
      <Button
        zIndex="55"
        leftIcon={
          <svg
            stroke="#fff"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="#fff"
                d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 12V8h-2v4H8l4 5 4-5h-3z"
              ></path>
            </g>
          </svg>
        }
        fontSize={{ base: "10px", sm: "14px" }}
      >
        <Text pl={2} textTransform="uppercase" fontFamily="Lato">
          {t("cv")}
        </Text>
      </Button>
    </Link>
  );
};

export default CVButton;
