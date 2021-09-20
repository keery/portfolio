import React, { useRef, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const blackfluidRef = useRef();

  useEffect(() => {
    if (typeof blackfluidRef) {
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
              <a href="/a-propos" className="slide-link">
                <div className="default">about me</div>
                <div>about me</div>
              </a>
              ,{" "}
              <a href="/projets" className="slide-link">
                <div className="default">my projects</div>
                <div>my projects</div>
              </a>
              , feel free to contact me at{" "}
              <a
                href="mailto:contact@guillaumeesnault.fr"
                className="slide-link"
              >
                <div className="default">contact@guillaumeesnault.fr</div>
                <div>contact@guillaumeesnault.fr</div>
              </a>
              .
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
                  muted="muted"
                  loop
                  autoplay
                />
                <img src="/assets/gif-blackfluid.gif" alt="" id="gif-smoke" />
              </div>
            </div>
            <div className="home-video-mask"></div>
          </div>
          <div className="vertical-text">
            <div>
              <a
                href="https://github.com/keery"
                target="_blank"
                className="slide-link"
              >
                <div className="default">GITHUB</div>
                <div>GITHUB</div>
              </a>
              <b></b>
              <a
                href="https://www.linkedin.com/in/guillaume-esnault-9387a2139/"
                target="_blank"
                className="slide-link"
              >
                <div className="default">LINKEDIN</div>
                <div>LINKEDIN</div>
              </a>
              <b></b>
              <a
                href="https://www.instagram.com/esnault_guillaume/"
                target="_blank"
                className="slide-link"
              >
                <div className="default">INSTAGRAM</div>
                <div>INSTAGRAM</div>
              </a>
            </div>
          </div>
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
