import React, { useState, useCallback, useRef } from "react";
import ReactDom from "react-dom/server";
import { GetServerSideProps, NextPage } from "next";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SwiperCore, {
  Pagination,
  EffectFade,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "~projects";
import ProjectSlide from "~components/Project/ProjectSlide";
import NextProject from "~components/Project/NextProject";
import ScrollIndicator from "~components/Project/ScrollIndicator";
import CircleProgress from "~components/Project/CircleProgress";
import SwiperBullet from "~components/Project/SwiperBullet";
import { useMotionValue } from "framer-motion";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { useBreakpointValue } from "@chakra-ui/react";

SwiperCore.use([Pagination, EffectFade, Navigation, Mousewheel, Keyboard]);

const Projects: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { t } = useTranslation("project");
  const [percent, setPercent] = useState<number>(0);

  const getProgress = useCallback((activeIndex) => {
    const progress = (((activeIndex + 1) * 100) / projects.length) * 0.01;
    setPercent(520 * progress);
  }, []);

  const containerRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const mouseHover = (event) => {
    if (typeof containerRef.current !== "undefined" && !isMobile) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const x = (event.clientX - width / 2) * 0.01 * 1;
      const y = (event.clientY - height / 2) * 0.01 * 1;

      rotateX.set(y > 0 ? -Math.abs(y) : Math.abs(y));
      rotateY.set(x);
    }
  };

  return (
    <section id="projects" onMouseMove={mouseHover} ref={containerRef}>
      <NextSeo title={t("seo.title")} description={t("seo.description")} />
      <ScrollIndicator />
      <NextProject />
      <Swiper
        direction="vertical"
        effect="fade"
        mousewheel
        keyboard
        speed={1000}
        onInit={(swiper) => getProgress(swiper.activeIndex)}
        onSlideChange={(swiper) => getProgress(swiper.activeIndex)}
        onBeforeTransitionStart={(swiper) => {
          if (!!swiper.slides[swiper.previousIndex]) {
            swiper.slides[swiper.previousIndex].classList.add("leave");
          }
        }}
        preventInteractionOnTransition
        navigation={{
          nextEl: ".arrow-next-project",
        }}
        pagination={{
          clickable: true,
          el: "#swiper-pagination",
          bulletClass: "bullet",
          bulletActiveClass: "active",
          renderBullet: (index, className) => {
            return ReactDom.renderToString(
              <SwiperBullet
                className={className}
                title={projects[index].title}
                number={index}
              />
            );
          },
        }}
        className="swiper-project"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.link}>
            <ProjectSlide
              project={project}
              rotateX={rotateX}
              rotateY={rotateY}
            />
          </SwiperSlide>
        ))}
        <CircleProgress progress={percent} />
      </Swiper>
      <div id="swiper-pagination" />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["project", "common"])),
    },
  };
};

export default Projects;
