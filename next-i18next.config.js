const path = require("path");

module.exports = {
  i18n: {
    browserLanguageDetection: true,
    defaultLocale: "fr",
    locales: ["fr", "en"],
    localePath: path.resolve("./public/locales"),
  },
  react: {
    useSuspense: false,
  },
};
