enum Lang {
  en = "en",
  th = "th",
}

export interface I18n {
  locales?: Lang[];
  locale?: string;
  defaultLocale?: Lang;
}
