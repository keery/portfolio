import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SSRConfig } from "next-i18next";
import { Box, Flex } from "@chakra-ui/react";
import SwiperCore from "swiper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScrollIndicator from "~components/Project/ScrollIndicator";
import Experiences from "~components/About/Experiences";
import CVButton from "~components/About/CVButton";
import GraphExperiences from "~components/About/GraphExperiences";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import SwiperNumber from "~components/About/SwiperNumber";

const About: NextPage = () => {
  const { t } = useTranslation("about");
  const [swiper, setSwiper] = useState<SwiperCore>(null);
  const [indexes, setIndex] = useState<[number | "start", number]>([
    "start",
    0,
  ]);

  return (
    <div id="about">
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <div id="about-container">
        <Flex alignItems="center" h="100%">
          <Experiences setIndex={setIndex} setSwiper={setSwiper} />
          <GraphExperiences
            prevIndex={indexes[0]}
            activeIndex={indexes[1]}
            textSwiper={swiper}
          />
        </Flex>
      </div>
      <Flex
        px={4}
        justifyContent="space-between"
        alignItems="center"
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        {/* <CVButton /> */}
        <ScrollIndicator
          pos={{ base: "relative", md: "absolute" }}
          left={{ base: 0, md: "50%" }}
          margin={0}
          bottom={{ base: 0, md: "15px" }}
          transform={{ base: "none", md: "translateX(-50%)" }}
        />
        <SwiperNumber activeIndex={swiper?.activeIndex} />
      </Flex>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
    },
  };
};

export default About;
