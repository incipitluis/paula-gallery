import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ["en", "es"];
export const defaultLocale = "en";
export const i18n = {
  defaultLocale: defaultLocale,
  locales: locales,
} as const;

export type Locale = (typeof i18n)["locales"][number];


export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();
  
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
