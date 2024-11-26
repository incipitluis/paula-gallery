import createMiddleware from "next-intl/middleware"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { locales, defaultLocale } from "./i18n/request"


const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
})

const isProtectedRoute = createRouteMatcher([

  "",
])

const isAdminRoute = createRouteMatcher([""])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
  if (isAdminRoute(req)) {
    await auth.protect((has) => {
      return has({ permission: "org:admin_panel:access" })
    })
  }
  return intlMiddleware(req)
})

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/(en|es)/:path*"],
}
