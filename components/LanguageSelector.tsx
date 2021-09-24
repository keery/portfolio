import React, { useMemo } from "react";
import { Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const nextLanguage = useMemo(
    () => (router.locale === "fr" ? "en" : "fr"),
    [router.locale]
  );

  return (
    <Link href={"/"} locale={nextLanguage}>
      <Button w="40px" p={1} mb={2} className="language-selector">
        <Image src={`assets/languages/${nextLanguage}.png`} />
      </Button>
    </Link>
  );
};

export default LanguageSelector;
