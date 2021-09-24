import React, { useMemo } from "react";
import { Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSelector = () => {
  const router = useRouter();
  const nextLanguage = useMemo(
    () => (router.locale === "fr" ? "en" : "fr"),
    [router.locale]
  );

  return (
    <Link href={router.pathname} locale={nextLanguage}>
      <Button w="40px" p={1} mb={2} className="language-selector">
        <Image src={`assets/languages/${nextLanguage}.png`} />
      </Button>
    </Link>
  );
};

export default LanguageSelector;
