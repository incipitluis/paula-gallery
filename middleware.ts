import createMiddleware from "next-intl/middleware"
import {
  defaultLocale,
  locales,
} from './i18n-config';

export default createMiddleware({locales, defaultLocale})

export const config = {
  matcher: [ '/((?!api|_next|_vercel|.*\\..*).*)', "/", /* La configuración anterior fallaba. O no se cargaban las imágenes, o no se cargaba la signin page. */
    "/(en|es)/:path*",],
}
