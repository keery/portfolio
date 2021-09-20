import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NextApp, { AppProps } from "next/app";
import "../styles/globals.css";
import theme from "../theme";
import AppHead from "~components/AppHead";
import { appWithTranslation } from "next-i18next";
import Header from "~components/Header";

import "../styles/Nav.css";
import "../styles/Burger.css";
import "../styles/Home.css";

const App = ({ Component, pageProps }: AppProps) => {
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
        <Header />
        <Component {...pageProps} />
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
