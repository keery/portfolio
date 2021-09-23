import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SSRConfig } from "next-i18next";
import { Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScrollIndicator from "~components/Project/ScrollIndicator";
import Experiences from "~components/About/Experiences";
import CVButton from "~components/About/CVButton";
import GraphExperiences from "~components/About/GraphExperiences";

const About: NextPage = () => {
  const [indexes, setIndex] = useState<[number | "start", number]>([
    "start",
    0,
  ]);

  return (
    <div id="about">
      <CVButton />
      <ScrollIndicator />
      <div id="about-container">
        <Flex alignItems="center" h="100%">
          <Experiences setIndex={setIndex} />
          <GraphExperiences prevIndex={indexes[0]} activeIndex={indexes[1]} />
        </Flex>
        {/* <div id="slider-schema">
          <ul className="slides">
            <li>
              <div className="about-schema">
                <div className="about-schema-container">
                  <svg
                    id="about-step-one-line"
                    className="about-step active"
                    x="0px"
                    y="0px"
                    viewBox="0 0 660 900"
                  >
                    <g id="part-1" transform="translate(0 0)">
                      <polyline
                        className="st2"
                        id="line_x5F_6"
                        points="165,806.5 138,806.5 138,899.5 "
                      />
                      <polyline
                        className="st2"
                        id="line_x5F_4_3_"
                        points="532.8,727.5 532.8,806.5 138,806.5 "
                      />
                      <path
                        className="st2"
                        d="M451.3,526.5c22.7-19.3,52.1-31,84.2-31c31.3,0,60,11.1,82.5,29.5"
                        id="arc_x5F_2"
                      />
                      <circle
                        className="st2"
                        cx="136.5"
                        cy="209.5"
                        data-v-79a08562=""
                        id="circle"
                        r="101"
                      />
                      <circle
                        className="st2"
                        cx="532.5"
                        cy="625.5"
                        id="circle_7_"
                        r="101"
                      />
                      <polyline
                        className="st2"
                        id="line_x5F_4_2_"
                        points="524,430 535.5,430 535.5,495.5 "
                      />
                      <polyline
                        className="st2"
                        id="line_x5F_2"
                        points="136.6,311 136.6,430 246,430 525.7,430 "
                      />
                      <path
                        className="st2"
                        d="M54.3,110.5c22.7-19.3,52.1-31,84.2-31c31.3,0,60,11.1,82.5,29.5"
                        id="arc_x5F_1"
                      />
                      <line
                        className="st2"
                        id="line_x5F_1"
                        x1="138"
                        x2="138"
                        y1="79"
                        y2="0"
                      ></line>{" "}
                    </g>
                  </svg>
                  <svg
                    version="1.1"
                    id="about-step-one-img"
                    className="about-img active"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 660 900"
                  >
                    <image
                      width="160"
                      height="70"
                      x="57"
                      y="175"
                      href="../../assets/logo-gen-contact.png"
                    />
                    <image
                      width="160"
                      height="70"
                      x="453"
                      y="595"
                      href="../../assets/logo-neftis.png"
                    />
                    <circle
                      className="invisble-shape"
                      cx="136.5"
                      cy="209.5"
                      id="circle"
                      r="101"
                    />
                    <circle
                      className="invisble-shape"
                      cx="532.5"
                      cy="625.5"
                      id="circle_7_"
                      r="101"
                    />
                  </svg>
                </div>
              </div>
            </li>
            <li>
              <div className="about-schema">
                <div className="about-schema-container">
                  <svg
                    id="about-step-two-line"
                    className="about-step"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 660 900"
                  >
                    <g id="part-1" transform="translate(137, 0)">
                      <circle
                        id="circle"
                        className="st2"
                        cx="321.07"
                        cy="230.5"
                        r="101"
                      />
                      <path
                        id="arc_1"
                        className="st2"
                        d="M381.3,130.5A130,130,0,0,1,548,129"
                        transform="translate(-142.43 1)"
                      />
                      <polyline
                        id="line_1"
                        className="st2"
                        points="323.4 101.33 323.4 48.25 1 48.25 1 0"
                      />
                      <path
                        id="line_1-2"
                        data-name="line_1"
                        className="st2"
                        d="M465.83,47.25"
                        transform="translate(-142.43 1)"
                      />
                      <path
                        id="line_1-3"
                        data-name="line_1"
                        className="st2"
                        d="M466.25,99.5"
                        transform="translate(-142.43 1)"
                      />
                      <path
                        className="st2"
                        d="M463.5,330.5"
                        transform="translate(-142.43 1)"
                      />
                      <circle
                        id="circle"
                        className="st2"
                        cx="160"
                        cy="667"
                        r="101"
                      />
                      <path
                        id="arc_2"
                        className="st2"
                        d="M381.3,130.5A130,130,0,0,1,548,129"
                        style={{
                          transform: "translate(-305px, 436px)",
                        }}
                      />
                      <polyline
                        className="st2"
                        points="321.07 331.5 321.07 441 162.2 441 162.2 535"
                      />
                    </g>
                  </svg>
                  <svg
                    data-v-79a08562=""
                    version="1.1"
                    id="about-step-one-img"
                    className="about-img active"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 660 900"
                  >
                    <g transform="translate(137, 0)">
                      <image
                        width="130"
                        height="93"
                        x="257.22"
                        y="187.67"
                        href="../../assets/logo-sewan.png"
                      />
                      <image
                        width="170"
                        height="93"
                        x="75"
                        y="623"
                        href="../../assets/logo-premieroctet.png"
                      />
                      <circle
                        className="invisble-shape"
                        cx="321.07"
                        cy="230.5"
                        r="101"
                      />
                      <circle
                        className="invisble-shape"
                        cx="160"
                        cy="667"
                        r="101"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default About;
