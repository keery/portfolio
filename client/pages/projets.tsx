import React from "react";
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

SwiperCore.use([Pagination, EffectFade, Navigation, Mousewheel, Keyboard]);

const Projects: NextPage = () => {
  return (
    <section id="projects">
      <ScrollIndicator />
      <NextProject />
      <Swiper
        direction="vertical"
        effect="fade"
        mousewheel
        keyboard
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
          <SwiperSlide>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CircleProgress />
      <div id="swiper-pagination" />
    </section>
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

export default Projects;
