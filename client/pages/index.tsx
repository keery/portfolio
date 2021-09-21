import React, { useRef, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SlideLink from "~components/SlideLink";
import VerticalText from "~components/VerticalText";
import { ROUTE_ABOUT, ROUTE_PROJECTS, EMAIL } from "~constants";

const Home: NextPage = () => {
  const blackfluidRef = useRef();

  useEffect(() => {
    if (typeof blackfluidRef?.current !== "undefined") {
      blackfluidRef.current.play();
    }
  }, [blackfluidRef]);

  return (
    <div className="enter">
      <section
        id="home"
        // TODO: geparallax
        degreeX="24"
        degreeY="15"
      >
        <div id="home-container">
          <div className="home-presentation">
            <h1 className="home-name">
              <div className="firstname">Guillaume</div>
              <div className="lastname">Esnault</div>
            </h1>
            <div className="home-description">
              <div>
                Fullstack developer from <i className="eiffel">Paris</i>.
              </div>
              If you want to know more{" "}
              <SlideLink href={ROUTE_ABOUT} text="about me" withOpacity />,{" "}
              <SlideLink href={ROUTE_PROJECTS} text="my projects" withOpacity />
              , feel free to contact me at{" "}
              <SlideLink href={`mailto:${EMAIL}`} text={EMAIL} withOpacity />.
            </div>
          </div>
          <div className="home-video">
            <div className="home-video-bg-container">
              <div
                className="home-video-bg geparallax-container"
                id="video-wrapper"
              >
                <video
                  ref={blackfluidRef}
                  id="blackfluid"
                  src="/assets/blackfluid.mp4"
                  muted
                  loop
                  autoplay
                />
                <img src="/assets/gif-blackfluid.gif" alt="" id="gif-smoke" />
              </div>
            </div>
            <div className="home-video-mask" />
          </div>
          <VerticalText />
        </div>
      </section>
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

export default Home;
