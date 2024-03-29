import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NextApp, { AppProps } from "next/app";
import "../styles/globals.css";
import theme from "../theme";
import AppHead from "~components/AppHead";
import { appWithTranslation } from "next-i18next";
import Layout from "~components/Layout";
import Loader from "~components/Loader";

import "swiper/swiper-bundle.min.css";
import "../styles/Nav.css";
import "../styles/Burger.css";
import "../styles/Home.css";
import "../styles/Project.css";
import "../styles/About.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [showLoader, setShowLoader] = useState(true);
  console.log(
    "%cYou think i'm suitable for your projects ?\n" +
      "%c Contact me at " +
      "%ccontact@guillaumeesnault.fr",
    "font-size: 23px;color: #deec1c;font-family:arial;font-weight:900;",
    "font-size: 16px;color: #deec1c;font-family:arial;font-weight:bold;",
    "font-size: 16px;text-decoration:underline;color: #266d83;font-family:arial;font-weight:bold;"
  );

  const content = (
    <>
      <AppHead />
      <ChakraProvider theme={theme}>
        <Layout>
          {showLoader ? (
            <Loader setShow={setShowLoader} />
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </ChakraProvider>
    </>
  );

  return content;
};

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(App);
