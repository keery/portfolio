import React, { useRef, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SlideLink from "~components/SlideLink";
import VerticalText from "~components/VerticalText";
import { ROUTE_ABOUT, ROUTE_PROJECTS, EMAIL } from "~constants";
import { useTranslation } from "next-i18next";
import { useBreakpointValue } from "@chakra-ui/react";

const Home: NextPage = () => {
  const blackfluidRef = useRef(null);
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (typeof blackfluidRef?.current !== "undefined") {
      blackfluidRef.current.play();
    }
  }, [blackfluidRef]);

  return (
    <div className="enter">
      <section id="home">
        <div id="home-container">
          <div className="home-presentation">
            <h1 className="home-name">
              <div className="firstname">Guillaume</div>
              <div className="lastname">Esnault</div>
            </h1>
            <div className="home-description">
              <div>
                {t("home.description")} <i className="eiffel">Paris</i>.
              </div>
              <div>{t("home.description2")}</div>
              {t("home.knowMore")}{" "}
              <SlideLink
                href={ROUTE_ABOUT}
                text={t("home.about")}
                withOpacity
              />
              ,{" "}
              <SlideLink
                href={ROUTE_PROJECTS}
                text={t("home.project")}
                withOpacity
              />
              <div>
                {t("home.contact")}{" "}
                <SlideLink href={`mailto:${EMAIL}`} text={EMAIL} withOpacity />.
              </div>
            </div>
          </div>
          <div className="home-video">
            <div className="home-video-bg-container">
              <div
                className="home-video-bg geparallax-container"
                id="video-wrapper"
              >
                {isMobile ? (
                  <img src="/assets/gif-blackfluid.gif" alt="" id="gif-smoke" />
                ) : (
                  <video
                    ref={blackfluidRef}
                    id="blackfluid"
                    src="/assets/blackfluid.mp4"
                    muted
                    loop
                  />
                )}
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
