import React from "react";
import NextHead from "next/head";
import { useTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

const AppHead = () => {
  const { t } = useTranslation();
  return (
    <>
      <NextHead>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#3e555b"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
      <DefaultSeo
        titleTemplate="%s | Guillaume Esnault"
        defaultTitle={t("seo.title")}
        description={t("seo.description")}
        openGraph={{
          type: "website",
          url: process.env.NEXT_PUBLIC_URL,
          site_name: "Guillaume Esnault | Portfolio",
          images: [
            {
              url: process.env.NEXT_PUBLIC_URL + "/assets/og-cover.png",
              width: 300,
              height: 169,
              alt: "Guillaume Esnault logo",
            },
          ],
        }}
        twitter={{
          handle: "gesnault",
          site: process.env.NEXT_PUBLIC_URL,
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default AppHead;
