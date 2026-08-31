export const languages = {
  en: {
    name: "English",
    nativeName: "English",
    code: "en",
    ogLocale: "en_US",
  },
  es: {
    name: "Spanish",
    nativeName: "Español",
    code: "es",
    ogLocale: "es_ES",
  },
  ja: {
    name: "Japanese",
    nativeName: "日本語",
    code: "ja",
    ogLocale: "ja_JP",
  },
  fr: {
    name: "French",
    nativeName: "Français",
    code: "fr",
    ogLocale: "fr_FR",
  },
  de: {
    name: "German",
    nativeName: "Deutsch",
    code: "de",
    ogLocale: "de_DE",
  },
  pt: {
    name: "Portuguese",
    nativeName: "Português",
    code: "pt",
    ogLocale: "pt_BR",
  },
  ko: {
    name: "Korean",
    nativeName: "한국어",
    code: "ko",
    ogLocale: "ko_KR",
  },
  it: {
    name: "Italian",
    nativeName: "Italiano",
    code: "it",
    ogLocale: "it_IT",
  },
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = "en";

export const nonDefaultLangs = Object.keys(languages).filter(
  (lang): lang is Exclude<SupportedLanguage, typeof defaultLang> => lang !== defaultLang
);

export const showDefaultLang = false;
